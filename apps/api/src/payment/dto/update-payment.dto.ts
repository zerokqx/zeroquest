import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
} from 'class-validator';
import { PaymentAppliedStatus, PaymentStatus } from '@/generated/prisma/enums';
import { ApiProperty } from '@nestjs/swagger';

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
