import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export const IDEMPOTENCE_KEY_HEADER = 'Idempotence-Key';
export const IDEMPOTENCE_KEY_HEADER_DESCRIPTION =
  'Ключ идемпотентности для безопасного повтора запроса к YooKassa.';

export class CreatePaymentDto {
  @ApiProperty({
    description: 'Сумма пополнения в рублях строкой.',
    example: '500.00',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d+(\.\d{1,2})?$/, {
    message: 'amount must be a valid money string, e.g. 500 or 500.00',
  })
  amount!: string;
}
