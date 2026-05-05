import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Plan, Prisma } from '@zeroquest/db';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreatePlanDto implements Plan {
  @ApiHideProperty()
  id!: number;

  @ApiProperty()
  @IsBoolean()
  isSpecial!: boolean;

  @ApiProperty({ type: Prisma.Decimal })
  @Transform(({ value }) => {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }
    if (typeof value === 'number' && Number.isFinite(value)) {
      return String(value);
    }
    if (typeof value === 'string') {
      return value.trim();
    }
    return value;
  })
  @IsDecimal()
  discountedPercent!: Prisma.Decimal;

  @ApiProperty({ nullable: true, type: String })
  @IsOptional()
  @IsString()
  features!: string | null;

  @ApiProperty()
  @IsNumber()
  @Max(300)
  @Min(0)
  totalGb!: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price!: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(10, 80)
  description!: string;

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
