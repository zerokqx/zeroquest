
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { AcceptedPolicyDto } from '@/domains/content/policy/dto/accepted-policy.dto';
import { RegisterDto } from '../register/register.dto';

export class LoginDto extends RegisterDto {
  @ApiProperty({ type: AcceptedPolicyDto, isArray: true })
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => AcceptedPolicyDto)
  @IsArray()
  policy!: AcceptedPolicyDto[];
}
