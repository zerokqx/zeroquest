import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { YookassaModule } from '@/yookassa/yookassa.module';
import { PaymentPersistenceModule } from './payment-persistence.module';

@Module({
  imports: [YookassaModule, PaymentPersistenceModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
