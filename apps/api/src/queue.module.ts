// src/queue/queue.module.ts
import { Module } from '@nestjs/common';
import { RefundModule } from './domains/billing/refund/refund.module';
import { ReviewModule } from './domains/content/review/review.module';

@Module({
  imports: [RefundModule, ReviewModule],
})
export class QueueModule {}
