import { Module } from '@nestjs/common';
import { RefundService } from './refund.service';
import { RefundController } from './refund.controller';
import { RefundRepository } from './refund.repository';
import { PaymentPersistenceModule } from '@/domains/billing/payment/payment-persistence.module';
import { YookassaModule } from '@/domains/billing/yookassa/yookassa.module';
import { WalletModule } from '@/domains/billing/wallet/wallet.module';

@Module({
  imports: [PaymentPersistenceModule, YookassaModule, WalletModule],
  controllers: [RefundController],
  providers: [RefundService, RefundRepository],
})
export class RefundModule {}
