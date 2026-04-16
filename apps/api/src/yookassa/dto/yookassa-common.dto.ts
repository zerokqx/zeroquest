import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AmountDto {
  @ApiProperty()
  @IsString()
  value!: string;

  @ApiProperty()
  @IsString()
  currency!: string;
}

export interface YookassaRecipientDto {
  account_id: string;
  gateway_id: string;
}

export type YookassaMetadataValue = string | number | boolean | null;
