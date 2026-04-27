import {
  AmountDto,
  YookassaMetadataValue,
  YookassaRecipientDto,
} from './yookassa-common.dto';

export interface GetPaymentAuthorizationThreeDSecureDto {
  applied: boolean;
}

export interface GetPaymentAuthorizationDetailsDto {
  rrn?: string;
  auth_code?: string;
  three_d_secure?: GetPaymentAuthorizationThreeDSecureDto;
}

export interface GetPaymentCardProductDto {
  code: string;
  name: string;
}

export interface GetPaymentBankCardDto {
  first6: string;
  last4: string;
  expiry_month: string;
  expiry_year: string;
  card_type: string;
  card_product?: GetPaymentCardProductDto;
  issuer_country?: string;
  issuer_name?: string;
}

export interface GetPaymentMethodDto {
  type: string;
  id: string;
  saved: boolean;
  title?: string;
  card?: GetPaymentBankCardDto;
}

export interface GetPaymentResponseDto {
  id: string;
  status: string;
  paid: boolean;
  amount: AmountDto;
  authorization_details?: GetPaymentAuthorizationDetailsDto;
  created_at: string;
  description?: string;
  expires_at?: string;
  metadata: Record<string, YookassaMetadataValue>;
  payment_method?: GetPaymentMethodDto;
  recipient: YookassaRecipientDto;
  refundable: boolean;
  test: boolean;
  income_amount?: AmountDto;
}
