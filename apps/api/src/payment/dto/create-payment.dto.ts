import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatePaymentDto {

  // @ApiProperty()
  // @IsNumber()
  // value!: number;
  //
  // @ApiProperty()
  // @IsString()
  // currency!: string;

  @ApiProperty()
  @IsNumber()
  planId!: number;
}
