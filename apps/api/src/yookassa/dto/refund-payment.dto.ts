import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { AmountDto } from './yookassa-common.dto';

export class RefundPaymentDto {
  @ApiProperty({ type: AmountDto })
  @ValidateNested()
  @Type(() => AmountDto)
  amount!: AmountDto;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  paymentId!: string;
}
