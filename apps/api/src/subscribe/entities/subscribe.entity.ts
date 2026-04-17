import { ApiProperty } from '@nestjs/swagger';
import { Subscribe, SubscribeStatus } from '@zeroquest/db';

export class SubscribeEntity implements Subscribe {
  @ApiProperty()
  userId!: string;
  @ApiProperty()
  email!: string;
  @ApiProperty()
  name!: string;

  @ApiProperty()
  id!: string;

  @ApiProperty()
  vlessLink!: string;

  @ApiProperty()
  vlessClientId!: string;

  @ApiProperty()
  nextPaymentDate!: Date;

  @ApiProperty({ enum: SubscribeStatus })
  status!: SubscribeStatus;

  @ApiProperty()
  expiresAt!: Date;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;

  @ApiProperty()
  planId!: number;

  @ApiProperty()
  totalGb!: number;
}
