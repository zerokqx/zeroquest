import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
} from 'class-validator';

export class CreatePlanDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price!: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(10, 80)
  description?: string;

  @ApiProperty()
  @IsNumber()
  inboundId!: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(3, 13)
  @IsString()
  name!: string;

  @ApiProperty()
  @IsNotEmpty()
  @Max(30)
  @IsNumber()
  duratationDays!: number;
}
