import { Type } from 'class-transformer';
import {
  IsIn,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { MetadataDto } from './metadata.dto';
import { AmountDto } from './yookassa-common.dto';
import { YOOKASSA_WEBHOOK_EVENT } from './webhook-event.dto';

class PaymentSucceededObjectDto {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @ValidateNested()
  @Type(() => AmountDto)
  amount!: AmountDto;

  @ValidateNested()
  @Type(() => MetadataDto)
  metadata!: MetadataDto;
}

export class PaymentSucceededWebhookDto {
  @IsIn([YOOKASSA_WEBHOOK_EVENT.PaymentSucceeded])
  event!: typeof YOOKASSA_WEBHOOK_EVENT.PaymentSucceeded;

  @ValidateNested()
  @Type(() => PaymentSucceededObjectDto)
  object!: PaymentSucceededObjectDto;
}
