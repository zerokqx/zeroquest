// src/queue/queue.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { RefundModule } from './refund/refund.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'subscribe',
    }),
    RefundModule,
    ReviewModule,
  ],
  exports: [BullModule],
})
export class QueueModule {}
