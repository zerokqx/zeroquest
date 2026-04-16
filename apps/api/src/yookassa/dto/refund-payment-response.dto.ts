import {
  AmountDto,
  YookassaMetadataValue,
  YookassaRecipientDto,
} from './yookassa-common.dto';

export interface RefundPaymentConfirmationDto {
  type: string;
  return_url: string;
  confirmation_url: string;
}

export interface RefundPaymentMethodDto {
  type: string;
  id: string;
  saved: boolean;
}

export interface RefundPaymentResponseDto {
  id: string;
  status: string;
  paid: boolean;
  amount: AmountDto;
  confirmation: RefundPaymentConfirmationDto;
  created_at: string;
  description: string;
  metadata: Record<string, YookassaMetadataValue>;
  payment_method: RefundPaymentMethodDto;
  recipient: YookassaRecipientDto;
  refundable: boolean;
  test: boolean;
}
