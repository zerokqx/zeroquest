import { Module } from '@nestjs/common';
import { YookassaService } from './yookassa.service';
import { YookassaController } from './yookassa.controller';
import { YookassaWebhookService } from './yookassa-webhook.service';
import { PaymentPersistenceModule } from '@/payment/payment-persistence.module';
import { WalletModule } from '@/wallet/wallet.module';

@Module({
  imports: [PaymentPersistenceModule, WalletModule],
  controllers: [YookassaController],
  providers: [YookassaService, YookassaWebhookService],
  exports: [YookassaService],
})
export class YookassaModule {}
