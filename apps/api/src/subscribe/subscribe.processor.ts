import { Processor, WorkerHost } from '@nestjs/bullmq';
import { SubscribeService } from './subscribe.service';
import { Job } from 'bullmq';
import {
  SUBSCRIBE_EVENTS,
  SubscribeEvent,
  SubscribeEventName,
  SubscribeNew,
} from './dto/subscribe-new.dto';
import { Injectable, Logger } from '@nestjs/common';
import { PaymentEventService } from '@/payment/payment-event.service';

@Injectable()
@Processor('subscribe')
export class SubscribeProcessor extends WorkerHost {
  private logger = new Logger(SubscribeProcessor.name);
  constructor(
    private subscribeService: SubscribeService,
    private paymentEventService: PaymentEventService,
  ) {
    super();
  }

  override async process(
    job: Job<SubscribeEvent, unknown, SubscribeEventName>,
  ) {
    if (job.name === SUBSCRIBE_EVENTS.NEW) {
      const data = job.data as SubscribeNew;
      this.logger.debug('Новая задача получена', data);
      this.paymentEventService.emit(data.userId, {
        message: 'Подписка выпущена',
      });
      job.updateProgress(100);
    }
  }
}
