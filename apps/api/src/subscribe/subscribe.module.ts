import { Module } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { SubscribeController } from './subscribe.controller';
import { SubscribeProcessor } from './subscribe.processor';
import { QueueModule } from '@/queue.module';
import { SubscribeRepository } from './subscribe.repository';
import { PaymentPersistenceModule } from '@/payment/payment-persistence.module';

@Module({
  imports: [QueueModule, PaymentPersistenceModule],
  controllers: [SubscribeController],
  providers: [SubscribeService, SubscribeProcessor, SubscribeRepository],
  exports: [SubscribeService],
})
export class SubscribeModule {}
