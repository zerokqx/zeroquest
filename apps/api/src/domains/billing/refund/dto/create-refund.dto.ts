import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class CreateRefundDto {
  @ApiProperty({
    description: 'Локальный идентификатор платежа в таблице payments.',
    example: 42,
  })
  @IsInt()
  @IsPositive()
  paymentId!: number;
}
