import { ApiProperty } from '@nestjs/swagger';
import { Payment, PaymentStatus } from '@zeroquest/db';

export class PaymentEntity implements Payment {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  providerPaymentId!: string;

  @ApiProperty({ enum: PaymentStatus })
  status!: PaymentStatus;

  @ApiProperty()
  currency!: string;

  @ApiProperty()
  value!: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty({ type: String, nullable: true })
  description!: string | null;

  @ApiProperty()
  userId!: string;

  @ApiProperty()
  confirmationUrl!: string;

  @ApiProperty({ type: String, nullable: true })
  planId!: number | null;
}
