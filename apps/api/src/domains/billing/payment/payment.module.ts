import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { YookassaModule } from '@/domains/billing/yookassa/yookassa.module';
import { PaymentPersistenceModule } from './payment-persistence.module';
import { WalletModule } from '@/domains/billing/wallet/wallet.module';

@Module({
  imports: [YookassaModule, PaymentPersistenceModule, WalletModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
