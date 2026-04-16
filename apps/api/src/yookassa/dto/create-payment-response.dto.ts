import {
  AmountDto,
  YookassaMetadataValue,
  YookassaRecipientDto,
} from './yookassa-common.dto';

export interface YookassaConfirmationDto {
  type: string;
  confirmation_url: string;
}

export interface CreatePaymentResponseDto {
  id: string;
  status: string;
  amount: AmountDto;
  description?: string;
  recipient: YookassaRecipientDto;
  created_at: string;
  confirmation: YookassaConfirmationDto;
  test: boolean;
  paid: boolean;
  refundable: boolean;
  metadata?: Record<string, YookassaMetadataValue>;
}
