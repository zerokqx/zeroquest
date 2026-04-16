import { Module } from '@nestjs/common';
import { RefundService } from './refund.service';
import { RefundController } from './refund.controller';
import { RefundRepository } from './refund.repository';
import { PaymentPersistenceModule } from '@/payment/payment-persistence.module';
import { YookassaModule } from '@/yookassa/yookassa.module';
import { WalletModule } from '@/wallet/wallet.module';

@Module({
  imports: [PaymentPersistenceModule, YookassaModule, WalletModule],
  controllers: [RefundController],
  providers: [RefundService, RefundRepository],
})
export class RefundModule {}
