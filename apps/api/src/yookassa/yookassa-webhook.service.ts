import { Injectable } from '@nestjs/common';
import {
  YOOKASSA_WEBHOOK_EVENT,
  YookassaWebhookDto,
} from './dto/webhook-event.dto';
import { PaymentRepository } from '@/payment/payment.repository';
import { PaymentStatus, Prisma } from '@zeroquest/db';
import { walletPaterns } from '@zeroquest/types';
import { toPenny } from '@zeroquest/converters';
import { Logger } from '@nestjs/common';
import { WalletService } from '@/wallet/wallet.service';

type Payment = Prisma.PaymentGetPayload<{ include: { plan: true } }>;
@Injectable()
export class YookassaWebhookService {
  private readonly logger = new Logger(YookassaWebhookService.name);
  constructor(
    private readonly paymentRepository: PaymentRepository,
    private readonly walletService: WalletService,
  ) {}

  async handleWebhook(data: YookassaWebhookDto) {
    const payment = (await this.paymentRepository.findByProviderPaymentId(
      data.object.id,
      { plan: true },
    )) as Payment;

    if (!payment || payment.status === PaymentStatus.SUCCEEDED) return;
    switch (data.event) {
      case YOOKASSA_WEBHOOK_EVENT.PaymentSucceeded: {
        return await this.succesedEvent(data);
      }

      default:
        throw new Error(`Неизвестный Event ${data.event}`);
    }
  }

  async succesedEvent({ object }: YookassaWebhookDto) {
    this.logger.debug(walletPaterns);
    const metadata = object.metadata;
    await this.walletService.creditWithQueue({
      amount: toPenny(object.amount.value),
      userId: metadata.userId,
    });
  }
}
