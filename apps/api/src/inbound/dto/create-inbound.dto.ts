import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateInboundDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  inboundId!: number;

  @ApiProperty()
  @Length(3, 15)
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  enable?: boolean;
}
