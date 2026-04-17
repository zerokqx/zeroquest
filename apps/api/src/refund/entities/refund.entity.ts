import { ApiProperty } from '@nestjs/swagger';
import { Refund, RefundStatus } from '@zeroquest/db';

export class RefundEntity implements Refund {
  @ApiProperty()
  id!: number;

  @ApiProperty({ enum: RefundStatus })
  status!: RefundStatus;

  @ApiProperty()
  paymentId!: number;
}
