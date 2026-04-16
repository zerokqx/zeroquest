import { Injectable, Logger } from '@nestjs/common';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';
import { AuthServiceTypes } from '@zeroquest/types';
import { SubscribeRepository } from './subscribe.repository';
import { SubscribeBuyDto } from './dto/subscribe-buy.dto';
import { WalletService } from '@/wallet/wallet.service';
import { Prisma, PrismaService } from '@zeroquest/db';
import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { ThreeXUiService } from '@/three-x-ui/three-x-ui.service';
import { toPenny } from '@zeroquest/converters';
import { toPenny } from '@zeroquest/converters';

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

  async findOne(id: number, payload: AuthServiceTypes.JwtPayload) {
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

    await this.threeXUiService.addClient(plan.inbound.inboundId, {
      clients: [
        {
          totalGb: plan.totalGb,
          limitIp: 3,
          id: uuidForVlessClient,
          email: name,
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

  async update(
    id: number,
    payload: AuthServiceTypes.JwtPayload,
    updateSubscribeDto: UpdateSubscribeDto,
  ) {
    return this.subscribeRepository.updateByIdAndUserId(
      id,
      payload.sub,
      updateSubscribeDto,
    );
  }
  async remove(id: number, payload: AuthServiceTypes.JwtPayload) {
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
}
