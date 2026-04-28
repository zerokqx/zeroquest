import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsIP,
  IsIn,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  Matches,
  ValidateNested,
} from 'class-validator';
import {
  Airline,
  ConfirmationDataType,
  CreatePaymentRequest,
  CreatePaymentRequestConfirmation,
  CreatePaymentRequestPaymentMethodData,
  CreatePaymentRequestReceiver,
  CurrencyCode,
  Locale,
  MonetaryAmount,
  PaymentDealInfo,
  PaymentOrderDataUtilities,
  CreatePaymentRequestStatementsInner,
  ReceiptData,
  Recipient,
  TransferDataPayment,
} from '@/generated/yookassa';

const CURRENCY_VALUES = Object.values(CurrencyCode);
const CONFIRMATION_TYPE_VALUES = Object.values(ConfirmationDataType);
const LOCALE_VALUES = Object.values(Locale);

export class CreatePaymentAmountDto implements MonetaryAmount {
  @ApiProperty({ example: '500.00' })
  @IsString()
  @Matches(/^\d+(\.\d{1,2})?$/, {
    message: 'amount.value must be a valid money string, e.g. 500 or 500.00',
  })
  value!: string;

  @ApiProperty({
    enum: CURRENCY_VALUES,
    example: CurrencyCode.Rub,
  })
  @IsIn(CURRENCY_VALUES)
  currency!: MonetaryAmount['currency'];
}

export class CreatePaymentConfirmationDto {
  @ApiProperty({
    enum: CONFIRMATION_TYPE_VALUES,
    example: ConfirmationDataType.Redirect,
  })
  @IsIn(CONFIRMATION_TYPE_VALUES)
  type!: CreatePaymentRequestConfirmation['type'];

  @ApiProperty({ example: 'https://example.com/payments/return' })
  @IsUrl()
  return_url!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  enforce?: boolean;

  @ApiPropertyOptional({ description: 'Локаль страницы подтверждения.' })
  @IsOptional()
  @IsIn(LOCALE_VALUES)
  locale?: Locale;
}

export class CreatePaymentDto implements CreatePaymentRequest {
  @ApiProperty({ type: CreatePaymentAmountDto })
  @ValidateNested()
  @Type(() => CreatePaymentAmountDto)
  amount!: CreatePaymentAmountDto;

  @ApiPropertyOptional({ maxLength: 128 })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  description?: string | undefined;

  @ApiPropertyOptional({ type: Object })
  @IsOptional()
  @IsObject()
  receipt?: ReceiptData | undefined;

  @ApiPropertyOptional({ type: Object })
  @IsOptional()
  @IsObject()
  recipient?: Recipient | undefined;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  payment_token?: string | undefined;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  payment_method_id?: string | undefined;

  @ApiPropertyOptional({ type: Object })
  @IsOptional()
  @IsObject()
  payment_method_data?: CreatePaymentRequestPaymentMethodData | undefined;

  @ApiPropertyOptional({ type: CreatePaymentConfirmationDto })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePaymentConfirmationDto)
  confirmation?: CreatePaymentConfirmationDto | undefined;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  save_payment_method?: boolean | undefined;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  capture?: boolean | undefined;

  @ApiPropertyOptional()
  @IsOptional()
  @IsIP()
  client_ip?: string | undefined;

  @ApiPropertyOptional({
    type: 'object',
    additionalProperties: {
      type: 'string',
      nullable: true,
    },
  })
  @IsOptional()
  @IsObject()
  metadata?: { [key: string]: string | null } | undefined;

  @ApiPropertyOptional({ type: Object })
  @IsOptional()
  @IsObject()
  airline?: Airline | undefined;

  @ApiPropertyOptional({ type: Object, isArray: true })
  @IsOptional()
  @IsArray()
  @IsObject({ each: true })
  transfers?: TransferDataPayment[] | undefined;

  @ApiPropertyOptional({ type: Object })
  @IsOptional()
  @IsObject()
  deal?: PaymentDealInfo | undefined;

  @ApiPropertyOptional({ maxLength: 200 })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  merchant_customer_id?: string | undefined;

  @ApiPropertyOptional({ type: Object })
  @IsOptional()
  @IsObject()
  payment_order?: PaymentOrderDataUtilities | undefined;

  @ApiPropertyOptional({ type: Object })
  @IsOptional()
  @IsObject()
  receiver?: CreatePaymentRequestReceiver | undefined;

  @ApiPropertyOptional({ type: Object, isArray: true })
  @IsOptional()
  @IsArray()
  @IsObject({ each: true })
  statements?: CreatePaymentRequestStatementsInner[] | undefined;
}
