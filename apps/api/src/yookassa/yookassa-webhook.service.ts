import { Injectable } from '@nestjs/common';
import {
  YOOKASSA_WEBHOOK_EVENT,
  YookassaWebhookDto,
} from './dto/webhook-event.dto';
import { PaymentRepository } from '@/payment/payment.repository';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import {
  SUBSCRIBE_EVENTS,
  SubscribeNew,
} from '@/subscribe/dto/subscribe-new.dto';
import { PaymentStatus, Prisma } from '@zeroquest/db';

type Payment = Prisma.PaymentGetPayload<{ include: { plan: true } }>;
@Injectable()
export class YookassaWebhookService {
  constructor(
    private readonly paymentRepository: PaymentRepository,
    @InjectQueue('subscribe') private readonly subscribeQueue: Queue,
  ) {}
  async handleWebhook(data: YookassaWebhookDto) {
    const payment = (await this.paymentRepository.findByProviderPaymentId(
      data.object.id,
      { plan: true },
    )) as Payment;

    if (!payment || payment.status === PaymentStatus.SUCCEEDED) return;
    switch (data.event) {
      case YOOKASSA_WEBHOOK_EVENT.PaymentSucceeded: {
        return this.succesedEvent(data, payment);
      }

      default:
        throw new Error(`Неизвестный Event ${data.event}`);
    }
  }

  async succesedEvent({ object }: YookassaWebhookDto, payment: Payment) {
    const metadata = object.metadata;
    await this.subscribeQueue.add(SUBSCRIBE_EVENTS.NEW, {
      ...metadata,
      paymentId: object.id,
      inboundId: payment.plan.inboundId,
      planId: Number(metadata.planId),
    } satisfies SubscribeNew);
  }
}
