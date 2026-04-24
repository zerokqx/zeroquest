import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaymentAppliedStatus, PaymentStatus } from '@zeroquest/db';

export class UpdatePaymentDto {

  @ApiProperty()
  @IsOptional()
  @IsEnum(PaymentAppliedStatus)
  appliedStatus?: PaymentAppliedStatus;


  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  paid?: boolean;


  @ApiProperty()
  @IsInt()
  @IsOptional()
  subscribeId?: number;


  @ApiProperty()
  @IsOptional()
  @IsEnum(PaymentStatus)
  status?:  PaymentStatus;
}
