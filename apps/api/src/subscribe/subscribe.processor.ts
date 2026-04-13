import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { SubscribeService } from './subscribe.service';
import { Job } from 'bullmq';
import {
  SUBSCRIBE_EVENTS,
  SubscribeEvent,
  SubscribeEventName,
  SubscribeNew,
} from './dto/subscribe-new.dto';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
@Processor('subscribe')
export class SubscribeProcessor extends WorkerHost {
  private logger = new Logger(SubscribeProcessor.name);
  constructor(private subscribeService: SubscribeService) {
    super();
  }

  override async process(
    job: Job<SubscribeEvent, unknown, SubscribeEventName>,
  ) {
    if (job.name === SUBSCRIBE_EVENTS.NEW) {
      const data = job.data as SubscribeNew;
      this.logger.debug('Новая задача получена', data);
      job.updateProgress(100);
    }
  }
}
