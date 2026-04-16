import { Injectable } from '@nestjs/common';
import {
  YOOKASSA_WEBHOOK_EVENT,
  YookassaWebhookBaseDto,
} from './dto/webhook-event.dto';
import { PaymentRepository } from '@/payment/payment.repository';
import { PaymentStatus } from '@zeroquest/db';
import { toPenny } from '@zeroquest/converters';
import { BadRequestException, Logger } from '@nestjs/common';
import { WalletService } from '@/wallet/wallet.service';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { PaymentSucceededWebhookDto } from './dto/webhook-payment-succeeded.dto';
import { RefundSucceededWebhookDto } from './dto/webhook-refund-succeeded.dto';
@Injectable()
export class YookassaWebhookService {
  private readonly logger = new Logger(YookassaWebhookService.name);
  constructor(
    private readonly paymentRepository: PaymentRepository,
    private readonly walletService: WalletService,
  ) {}

  async handleWebhook(data: YookassaWebhookBaseDto & Record<string, unknown>) {
    switch (data.event) {
      case YOOKASSA_WEBHOOK_EVENT.PaymentSucceeded: {
        const payload = this.parseEventPayload(PaymentSucceededWebhookDto, data);
        return await this.succesedEvent(payload);
      }
      case YOOKASSA_WEBHOOK_EVENT.RefundSucceeded: {
        const payload = this.parseEventPayload(RefundSucceededWebhookDto, data);
        return await this.refundSucceededEvent(payload);
      }

      default:
        this.logger.warn(`Пропущен необрабатываемый Event ${data.event}`);
        return;
    }
  }

  private parseEventPayload<T extends object>(
    dto: new () => T,
    raw: Record<string, unknown>,
  ): T {
    const parsed = plainToInstance(dto, raw);
    const errors = validateSync(parsed as object, {
      whitelist: true,
      forbidUnknownValues: true,
    });
    if (errors.length > 0) {
      throw new BadRequestException('Некорректный webhook payload.');
    }
    return parsed;
  }

  async succesedEvent({ object }: PaymentSucceededWebhookDto) {
    const payment = await this.paymentRepository.findByProviderPaymentId(
      object.id,
    );

    if (!payment || payment.status === PaymentStatus.SUCCEEDED) return;

    const metadata = object.metadata;
    await this.paymentRepository.updateByProviderPaymentId(object.id, {
      status: PaymentStatus.SUCCEEDED,
    });
    await this.walletService.creditWithQueue({
      amount: toPenny(object.amount.value),
      userId: metadata.userId,
    });
  }

  async refundSucceededEvent({ object }: RefundSucceededWebhookDto) {
    const payment = await this.paymentRepository.findByProviderPaymentId(
      object.payment_id,
    );

    if (!payment || payment.status === PaymentStatus.REFUNDED) return;

    const debit = await this.walletService.debitFromHeld({
      amount: toPenny(object.amount.value),
      userId: payment.userId,
    });

    if (!debit.ok) {
      throw new BadRequestException(`Wallet debit failed: ${debit.type}`);
    }

    await this.paymentRepository.updateByProviderPaymentId(object.payment_id, {
      status: PaymentStatus.REFUNDED,
    });
  }
}
