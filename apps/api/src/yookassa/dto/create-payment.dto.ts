import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { MetadataDto } from './metadata.dto';
import { AmountDto } from './yookassa-common.dto';

export class Confirmation {
  @ApiProperty()
  @IsString()
  type!: string;

  @ApiProperty()
  @IsUrl()
  return_url!: string;
}

export class CreatePaymentDto {
  @ApiProperty({ type: AmountDto })
  @ValidateNested()
  @Type(() => AmountDto)
  amount!: AmountDto;

  @IsBoolean()
  capture!: boolean;

  @ApiProperty({ type: Confirmation })
  @ValidateNested()
  @Type(() => Confirmation)
  confirmation!: Confirmation;

  @IsOptional()
  @IsString()
  description?: string;

  @ValidateNested()
  @Type(() => MetadataDto)
  metadata!: MetadataDto;
}
