import {
  IsBoolean,
  IsIn,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MetadataDto } from './metadata.dto';
import { AmountDto } from './create-payment.dto';

export const YOOKASSA_WEBHOOK_EVENT = {
  PaymentWaitingForCapture: 'payment.waiting_for_capture',
  PaymentSucceeded: 'payment.succeeded',
  PaymentCanceled: 'payment.canceled',
  PaymentMethodActive: 'payment_method.active',
  RefundSucceeded: 'refund.succeeded',
  PayoutSucceeded: 'payout.succeeded',
  PayoutCanceled: 'payout.canceled',
  DealClosed: 'deal.closed',
} as const;

export type YookassaWebhookEvent =
  (typeof YOOKASSA_WEBHOOK_EVENT)[keyof typeof YOOKASSA_WEBHOOK_EVENT];

export class RecipientDto {
  @IsString()
  account_id!: string;

  @IsString()
  gateway_id!: string;
}

export class PaymentMethodDto {
  @IsString()
  type!: string;

  @IsString()
  id!: string;

  @IsBoolean()
  saved!: boolean;

  @IsString()
  status!: string;

  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  account_number?: string; // иногда может не быть
}

export class ObjectDto {
  @IsString()
  id!: string;

  @IsString()
  status!: string;

  @ValidateNested()
  @Type(() => AmountDto)
  amount!: AmountDto;

  @ValidateNested()
  @Type(() => AmountDto)
  income_amount!: AmountDto;

  @IsOptional()
  @IsString()
  description?: string;

  @ValidateNested()
  @Type(() => RecipientDto)
  recipient!: RecipientDto;

  @ValidateNested()
  @Type(() => PaymentMethodDto)
  payment_method!: PaymentMethodDto;

  @IsOptional()
  @IsString()
  captured_at?: string;

  @IsString()
  created_at!: string;

  @IsBoolean()
  test!: boolean;

  @ValidateNested()
  @Type(() => AmountDto)
  refunded_amount!: AmountDto;

  @IsBoolean()
  paid!: boolean;

  @IsBoolean()
  refundable!: boolean;



  @ValidateNested()
  @Type(()=> MetadataDto)
  @IsOptional()
  metadata!: MetadataDto;
}

export class YookassaWebhookDto {
  @IsString()
  type!: string;

  @IsIn(Object.values(YOOKASSA_WEBHOOK_EVENT))
  event!: YookassaWebhookEvent;

  @ValidateNested()
  @Type(() => ObjectDto)
  object!: ObjectDto;
}
