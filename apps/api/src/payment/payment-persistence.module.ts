import { Module } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { PaymentEventService } from './payment-event.service';

@Module({
  providers: [PaymentRepository, PaymentEventService],
  exports: [PaymentRepository, PaymentEventService],
})
export class PaymentPersistenceModule {}
