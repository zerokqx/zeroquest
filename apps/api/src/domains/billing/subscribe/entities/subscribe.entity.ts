import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Subscribe, SubscribeStatus } from '@zeroquest/db';
import { Exclude } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class SubscribeEntity implements Subscribe {
  @ApiProperty()
  userId!: string;
  @ApiProperty()
  email!: string;
  @ApiProperty()
  name!: string;

  @ApiProperty()
  id!: string;

  @Exclude()
  @ApiHideProperty()
  vlessLink!: string;

  @ApiProperty()
  lenght!: number;

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

  constructor(partial: Partial<Subscribe>) {
    Object.assign(this, partial);
    this.lenght = this.vlessLink.length;
  }
}
