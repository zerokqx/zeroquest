import { Injectable, Logger } from '@nestjs/common';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';
import { AuthServiceTypes } from '@zeroquest/types';
import { SubscribeRepository } from './subscribe.repository';
import { SubscribeBuyDto } from './dto/subscribe-buy.dto';
import { WalletService } from '@/wallet/wallet.service';
import {
  Prisma,
  PrismaService,
  Subscribe,
  SubscribeStatus,
  User,
} from '@zeroquest/db';
import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';
import { ThreeXUiService } from '@/three-x-ui/three-x-ui.service';
import { toPenny } from '@zeroquest/converters';
import { SubscribeUpdateArgs } from 'node_modules/@zeroquest/db/src/generated/models';

type PlanWithInbound = Prisma.PlanGetPayload<{ include: { inbound: true } }>;

@Injectable()
export class SubscribeService {
  private readonly logger = new Logger(SubscribeService.name);

  constructor(
    private readonly subscribeRepository: SubscribeRepository,
    private readonly walletService: WalletService,
    private readonly prisma: PrismaService,
    private readonly threeXUiService: ThreeXUiService,
  ) {}
  async findAll(payload: AuthServiceTypes.JwtPayload) {
    return this.subscribeRepository.findManyByUserId(payload.sub);
  }

  async findOne(id: Subscribe['id'], payload: AuthServiceTypes.JwtPayload) {
    return this.subscribeRepository.findOneByIdAndUserId(id, payload.sub);
  }

  async create(
    plan: PlanWithInbound,
    payload: AuthServiceTypes.JwtPayload,
    deviceName: string,
  ) {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    const name = `${payload.login} / ${deviceName}`;
    const flow = 'xtls-rprx-vision';
    const uuidForVlessClient = crypto.randomUUID();
    const emailForVlessClient = crypto.randomUUID();

    await this.threeXUiService.addClient(plan.inbound.inboundId, {
      clients: [
        {
          totalGb: plan.totalGb,
          limitIp: 3,
          id: uuidForVlessClient,
          email: emailForVlessClient,
          comment: name,
          enable: true,
          flow,
          expiryTime: expiresAt.getTime(),
        },
      ],
    });

    return this.prisma.subscribe.create({
      data: {
        vlessLink: await this.threeXUiService.buildVlessLinkByInboundId(
          plan.inbound.inboundId,
          { email: name, flow, id: uuidForVlessClient },
        ),
        status: SubscribeStatus.ACTIVE,
        email: emailForVlessClient,
        plan: {
          connect: {
            id: plan.id,
          },
        },
        nextPaymentDate: expiresAt,
        user: {
          connect: {
            id: payload.sub,
          },
        },
        vlessClientId: uuidForVlessClient,
        name,
        totalGb: plan.totalGb,
        expiresAt,
      },
    });
  }

  async update(data: SubscribeUpdateArgs) {
    return this.subscribeRepository.update(data);
  }
  async remove(id: Subscribe['id'], payload: AuthServiceTypes.JwtPayload) {
    return this.subscribeRepository.deleteByIdAndUserId(id, payload.sub);
  }

  async renew(id: string, payload: AuthServiceTypes.JwtPayload) {
    const subscribe = await this.prisma.subscribe.findUnique({
      where: {
        id,
      },
      include: {
        plan: true,
      },
    });
    if (!subscribe) throw new NotFoundException();

    const debit = await this.walletService.debit({
      userId: payload.sub,
      amount: subscribe.plan.price,
    });
    if (!debit.ok) {
      this.logger.warn(
        `Renew failed on wallet debit: userId=${payload.sub}, subscribeId=${id}, amount=${subscribe.plan.price}, type=${debit.type}`,
      );
      throw new BadRequestException(`Wallet debit failed: ${debit.type}`);
    }

    const now = new Date();
    const baseDate = subscribe.expiresAt > now ? subscribe.expiresAt : now;
    const nextExpiresAt = new Date(baseDate);
    nextExpiresAt.setDate(
      nextExpiresAt.getDate() + subscribe.plan.duratationDays,
    );

    await this.threeXUiService.updateClient(subscribe.vlessClientId, {
      totalGb: subscribe.totalGb,
      expiryTime: nextExpiresAt.getTime(),
      enable: true,
    });

    return this.prisma.subscribe.update({
      where: {
        id_userId: { id, userId: payload.sub },
      },
      data: {
        nextPaymentDate: nextExpiresAt,
        expiresAt: nextExpiresAt,
      },
    });
  }

  async buy(
    { planId, deviceName }: SubscribeBuyDto,
    payload: AuthServiceTypes.JwtPayload,
  ) {
    const plan = await this.prisma.plan.findUnique({
      include: {
        inbound: true,
      },
      where: { id: planId },
    });
    if (!plan) throw new NotFoundException();
    const amount = toPenny(plan.price.toString());

    await this.walletService.heldMoney({
      userId: payload.sub,
      amount,
    });

    let subscribeId: string | null = null;
    try {
      const subscribe = await this.create(plan, payload, deviceName);
      subscribeId = subscribe.id;

      const debit = await this.walletService.debitFromHeld({
        userId: payload.sub,
        amount,
      });

      if (!debit.ok) {
        this.logger.warn(
          `Buy failed on wallet held debit: userId=${payload.sub}, planId=${planId}, amount=${amount}, type=${debit.type}`,
        );
        throw new BadRequestException(`Wallet debit failed: ${debit.type}`);
      }

      return subscribe;
    } catch (error) {
      if (!subscribeId) {
        await this.walletService.unheldMoney({
          userId: payload.sub,
          amount,
        });
      }
      throw error;
    }
  }

  async resetSubscribtion(id: Subscribe['id'], userId: User['id']) {
    this.logger.log(
      `Запрошен сброс подписки: subscribeId=${id}, userId=${userId}`,
    );

    const { plan, email, vlessClientId } =
      await this.prisma.subscribe.findUniqueOrThrow({
        where: {
          id_userId: { id, userId },
        },
        include: {
          plan: {
            include: { inbound: true },
          },
        },
      });

    this.logger.debug(
      `Данные подписки загружены: subscribeId=${id}, userId=${userId}, planId=${plan.id}, inboundId=${plan.inbound.inboundId}, durationDays=${plan.duratationDays}, priceRub=${plan.price.toString()}`,
    );

    const amount = toPenny(plan.price.toString());
    this.logger.debug(
      `Начато списание для сброса подписки: subscribeId=${id}, userId=${userId}, amountKopek=${amount}`,
    );

    const debit = await this.walletService.debit({
      userId,
      amount,
    });

    if (!debit.ok) {
      this.logger.warn(
        `Списание для сброса подписки не выполнено: subscribeId=${id}, userId=${userId}, amountKopek=${amount}, walletType=${debit.type}`,
      );
      throw new BadRequestException(`Wallet debit failed: ${debit.type}`);
    }
    this.logger.log(
      `Списание для сброса подписки выполнено: subscribeId=${id}, userId=${userId}, amountKopek=${amount}`,
    );

    const nextPaymentDate = new Date();
    nextPaymentDate.setDate(nextPaymentDate.getDate() + plan.duratationDays);
    this.logger.debug(
      `Применяем изменения после сброса: subscribeId=${id}, userId=${userId}, vlessClientId=${vlessClientId}, email=${email}`,
    );

    try {
      await Promise.all([
        this.subscribeRepository.changeStatus(id, SubscribeStatus.ACTIVE),
        this.subscribeRepository.changeNextPaymentDate(id, nextPaymentDate),
        this.threeXUiService.resetClientTraffic(plan.inbound.inboundId, email),
        this.threeXUiService.updateClient(vlessClientId, {
          enable: true,
          expiryTime: nextPaymentDate.getTime(),
        }),
      ]);
      this.logger.log(
        `Сброс подписки завершен: subscribeId=${id}, userId=${userId}`,
      );
    } catch (error) {
      const rollback = await this.walletService.credit({ userId, amount });
      const trace = error instanceof Error ? error.stack : undefined;
      const message =
        error instanceof Error ? error.message : 'Unknown reset error';
      this.logger.error(
        `Сброс подписки упал после списания: subscribeId=${id}, userId=${userId}, amountKopek=${amount}, error=${message}, rollbackOk=${rollback.ok}, rollbackType=${rollback.type}`,
        trace,
      );
      if (!rollback.ok) {
        this.logger.error(
          `Откат списания не выполнен: subscribeId=${id}, userId=${userId}, amountKopek=${amount}, rollbackType=${rollback.type}`,
        );
        throw new InternalServerErrorException(
          `Reset failed and rollback failed: ${rollback.type}`,
        );
      }
      this.logger.warn(
        `Откат списания выполнен: subscribeId=${id}, userId=${userId}, amountKopek=${amount}`,
      );
      throw error;
    }
  }
}
