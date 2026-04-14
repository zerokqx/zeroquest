import { Processor, WorkerHost } from '@nestjs/bullmq';
import { SubscribeService } from './subscribe.service';
import { Job, LockManager } from 'bullmq';
import {
  SUBSCRIBE_EVENTS,
  SubscribeEvent,
  SubscribeEventName,
  SubscribeNew,
} from './dto/subscribe-new.dto';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PaymentEventService } from '@/payment/payment-event.service';
import { ThreeXUiService } from '@/three-x-ui/three-x-ui.service';
import { PaymentRepository } from '@/payment/payment.repository';
import { subscribe } from 'diagnostics_channel';
import {
  PaymentAppliedStatus,
  PaymentStatus,
  PrismaService,
  SubscribeStatus,
} from '@zeroquest/db';

@Injectable()
@Processor('subscribe')
export class SubscribeProcessor extends WorkerHost {
  private logger = new Logger(SubscribeProcessor.name);
  constructor(
    private subscribeService: SubscribeService,
    private paymentEventService: PaymentEventService,
    private threeXUiService: ThreeXUiService,
    private prisma: PrismaService,
    private paymentRepository: PaymentRepository,
  ) {
    super();
  }

  override async process(
    job: Job<SubscribeEvent, unknown, SubscribeEventName>,
  ) {
    try {
      if (job.name === SUBSCRIBE_EVENTS.NEW) {
        const data = job.data as SubscribeNew;

        const plan = await this.prisma.plan.findUnique({
          where: { id: data.planId },
        });
        if (!plan) throw new NotFoundException('Plan not found');
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + plan.duratationDays);
        this.logger.debug(`Новая задача получена: ${JSON.stringify(data)}`);
        await this.prisma.$transaction(async (tx) => {
          this.paymentRepository.updateByProviderPaymentId(data.paymentId, {
            appliedStatus: 'PROCESSING',
          });

          this.paymentEventService.emit(data.userId, {
            type: 'subscribe:status:processing',
          });

          const subscribe = await tx.subscribe.create({
            data: {
              totalGb: plan.totalGb,
              user: {
                connect: {
                  id: data.userId,
                },
              },
              link: '',
              vlessClientId: crypto.randomUUID(),
              payments: {
                connect: {
                  providerPaymentId: data.paymentId,
                },
              },
              status: SubscribeStatus.PENDING,
              expiresAt,
              name: data.name,
              plan: {
                connect: {
                  id: data.planId,
                },
              },
            },
          });

          this.logger.debug(
            `Подписка создана в базе данные для пользователя ${data.userId}`,
          );

          const email = `${subscribe.vlessClientId} / ${data.name}`;
          const flow = 'xtls-rprx-vision';

          await this.threeXUiService.addClient(plan.inboundId, {
            clients: [
              {
                totalGb: subscribe.totalGb,
                enable: true,
                limitIp: 3,
                expiryTime: expiresAt.getTime(),
                flow,
                email,
                id: subscribe.vlessClientId,
              },
            ],
          });
          this.logger.debug(
            `Клиент в 3x-ui для пользователя ${data.userId} name=${data.name}`,
          );
          job.updateProgress({
            step: 80,
            message: 'Подписка создана в клиенте 3x-ui',
          });
          const link = await this.threeXUiService.buildVlessLinkByInboundId(
            data.inboundId,
            {
              id: subscribe.vlessClientId,
              flow,
              email,
            },
          );

          await tx.subscribe.update({
            where: { id: subscribe.id },
            data: {
              link,
              status: SubscribeStatus.ACTIVE,
            },
          });
          await tx.payment.update({
            where: { providerPaymentId: data.paymentId },
            data: {
              paid: true,
              status: PaymentStatus.SUCCEEDED,
              appliedStatus: PaymentAppliedStatus.SUCCEEDED,
            },
          });
        });
        this.logger.debug(
          `Подписка для пользователя ${data.userId} обнавлена. Установлены ссылка и статус`,
        );

        this.paymentEventService.emit(data.userId, {
          message: 'subscribe:status:active',
          data,
        });
        job.updateProgress(100);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const stack = error instanceof Error ? error.stack : undefined;

      this.logger.error(
        `Ошибка обработки subscribe job ${job.id}: ${message}`,
        stack,
      );
      throw error;
    }
  }
}
