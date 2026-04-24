import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

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
