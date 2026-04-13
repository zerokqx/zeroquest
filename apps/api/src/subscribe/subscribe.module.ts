import { Module } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { SubscribeController } from './subscribe.controller';
import { SubscribeProcessor } from './subscribe.processor';
import { QueueModule } from '@/queue.module';
import { SubscribeRepository } from './subscribe.repository';
import { PaymentPersistenceModule } from '@/payment/payment-persistence.module';
import { ThreeXUiModule } from '@/three-x-ui/three-x-ui.module';

@Module({
  imports: [QueueModule, PaymentPersistenceModule, ThreeXUiModule],
  controllers: [SubscribeController],
  providers: [SubscribeService, SubscribeProcessor, SubscribeRepository],
  exports: [SubscribeService],
})
export class SubscribeModule {}
