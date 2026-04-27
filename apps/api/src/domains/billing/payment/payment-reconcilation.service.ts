import { Cron } from '@nestjs/schedule';
import pLimit from 'p-limit';
import { PaymentRepository } from './payment.repository';
import { YookassaService } from '../yookassa/yookassa.service';
import { PaymentStatus } from '@zeroquest/db';
import { PaymentsApi } from '@/generated/yookassa';

export class PaymentReconcilationService {
  constructor(
    private readonly paymentRepository: PaymentRepository,
    private readonly yookassaService: YookassaService,
  ) {}

  @Cron('*/9 * * * *')
  async reconcilation() {
    const nineMinutesAgo = new Date(Date.now() - 9 * 60 * 1000);
    const payments = await this.paymentRepository.findMany({
      status: PaymentStatus.PENDING,
      createdAt: {
        gte: nineMinutesAgo,
      },
    });
    const d = new PaymentsApi({})
    const t:PaymentsApi =
    await Promise.all([
      payments.map(async (payment) => {
        const res = await this.yookassaService.getPayment(
          payment.providerPaymentId,
        );
        if(res.data.status=== )
      }),
    ]);
  }
}
