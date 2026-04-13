import { Module } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { SubscribeController } from './subscribe.controller';
import { SubscribeProcessor } from './subscribe.processor';
import { QueueModule } from '@/queue.module';

@Module({
  imports: [QueueModule],
  controllers: [SubscribeController],
  providers: [SubscribeService, SubscribeProcessor],
  exports: [SubscribeService],
})
export class SubscribeModule {}
