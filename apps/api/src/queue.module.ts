// src/queue/queue.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'subscribe',
    }),
  ],
  exports: [BullModule],
})
export class QueueModule {}
