import { ApiProperty } from '@nestjs/swagger';
import { AcceptedPolicyDto } from '@/domains/content/policy/dto/accepted-policy.dto';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

export class SubscribeBuyDto {
  @ApiProperty({ type: Number, example: 1 })
  @IsInt()
  @IsNotEmpty()
  planId!: number;

  @ApiProperty({ type: String, example: 'iPhone 15 Pro' })
  @IsNotEmpty()
  @IsString()
  deviceName!: string;

  @ApiProperty({ type: AcceptedPolicyDto, isArray: true })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => AcceptedPolicyDto)
  policy!: AcceptedPolicyDto[];
}
