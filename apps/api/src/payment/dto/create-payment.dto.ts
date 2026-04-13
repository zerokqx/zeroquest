import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

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

  @ApiProperty()
  @IsString()
  name!: string
}
