import { Type } from 'class-transformer';
import {
  IsIn,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AmountDto } from './yookassa-common.dto';
import { YOOKASSA_WEBHOOK_EVENT } from './webhook-event.dto';

class RefundSucceededObjectDto {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  payment_id!: string;

  @IsString()
  @IsNotEmpty()
  status!: string;

  @IsString()
  @IsNotEmpty()
  created_at!: string;

  @ValidateNested()
  @Type(() => AmountDto)
  amount!: AmountDto;
}

export class RefundSucceededWebhookDto {
  @IsIn([YOOKASSA_WEBHOOK_EVENT.RefundSucceeded])
  event!: typeof YOOKASSA_WEBHOOK_EVENT.RefundSucceeded;

  @ValidateNested()
  @Type(() => RefundSucceededObjectDto)
  object!: RefundSucceededObjectDto;
}
