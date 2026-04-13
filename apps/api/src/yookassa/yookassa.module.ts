import { Module } from '@nestjs/common';
import { YookassaService } from './yookassa.service';
import { YookassaController } from './yookassa.controller';
import { QueueModule } from '@/queue.module';
import { YookassaWebhookService } from './yookassa-webhook.service';
import { PaymentPersistenceModule } from '@/payment/payment-persistence.module';

@Module({
  imports: [QueueModule, PaymentPersistenceModule],
  controllers: [YookassaController],
  providers: [YookassaService, YookassaWebhookService],
  exports: [YookassaService],
})
export class YookassaModule {}
