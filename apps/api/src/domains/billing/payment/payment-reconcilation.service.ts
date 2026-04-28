import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import pLimit from 'p-limit';
import { PaymentRepository } from './payment.repository';
import { YookassaService } from '../yookassa/yookassa.service';
import {
  PaymentStatus as DbPaymentStatus,
  type PaymentStatus as DbPaymentStatusType,
} from '@zeroquest/db';
import {
  PaymentStatus as YookassaPaymentStatus,
  type PaymentStatus as YookassaPaymentStatusType,
} from '@/generated/yookassa';

const YOOKASSA_TO_DB_STATUS: Record<
  YookassaPaymentStatusType,
  DbPaymentStatusType
> = {
  [YookassaPaymentStatus.Pending]: DbPaymentStatus.PENDING,
  [YookassaPaymentStatus.WaitingForCapture]:
    DbPaymentStatus.WAITING_FOR_CONFIRMATION,
  [YookassaPaymentStatus.Succeeded]: DbPaymentStatus.SUCCEEDED,
  [YookassaPaymentStatus.Canceled]: DbPaymentStatus.CANCELED,
};

@Injectable()
export class PaymentReconcilationService {
  private readonly logger = new Logger(PaymentReconcilationService.name);

  constructor(
    private readonly paymentRepository: PaymentRepository,
    private readonly yookassaService: YookassaService,
  ) {}

  @Cron('* * * * *')
  async reconcilation() {
    const startedAt = Date.now();
    this.logger.log('Запуск джобы сверки платежей');

    const minuteAgo = new Date(Date.now() - 60 * 1000);
    const payments = await this.paymentRepository.findMany({
      status: DbPaymentStatus.PENDING,
      createdAt: {
        gte: minuteAgo,
      },
    });

    this.logger.log(
      `Найдено pending-платежей для сверки: count=${payments.length}`,
    );

    if (payments.length === 0) {
      this.logger.log(
        `Джоба сверки завершена: count=0, durationMs=${Date.now() - startedAt}`,
      );
      return;
    }

    const limit = pLimit(5);
    let updatedCount = 0;

    await Promise.all(
      payments.map((payment) =>
        limit(async () => {
          const res = await this.yookassaService.getPayment(
            payment.providerPaymentId,
          );

          const providerStatus = res.data.status;
          const nextStatus = YOOKASSA_TO_DB_STATUS[providerStatus];

          if (nextStatus === payment.status) {
            this.logger.debug(
              `Статус без изменений: providerPaymentId=${payment.providerPaymentId}, status=${payment.status}`,
            );
            return;
          }

          await this.paymentRepository.updateByProviderPaymentId(
            payment.providerPaymentId,
            { status: nextStatus },
          );
          updatedCount += 1;

          this.logger.log(
            `Обновлён статус платежа: providerPaymentId=${payment.providerPaymentId}, from=${payment.status}, to=${nextStatus}`,
          );
        }),
      ),
    );

    this.logger.log(
      `Джоба сверки завершена: total=${payments.length}, updated=${updatedCount}, durationMs=${Date.now() - startedAt}`,
    );
  }
}
