export interface YookassaAmountDto {
  value: string;
  currency: string;
}

export interface YookassaRecipientDto {
  account_id: string;
  gateway_id: string;
}

export interface YookassaConfirmationDto {
  type: string;
  confirmation_url: string;
}

export type YookassaMetadataValue = string | number | boolean | null;

export interface CreatePaymentResponseDto {
  id: string;
  status: string;
  amount: YookassaAmountDto;
  description?: string;
  recipient: YookassaRecipientDto;
  created_at: string;
  confirmation: YookassaConfirmationDto;
  test: boolean;
  paid: boolean;
  refundable: boolean;
  metadata?: Record<string, YookassaMetadataValue>;
}
