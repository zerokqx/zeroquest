import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsJWT,
  IsUUID,
  IsNotEmpty,
  IsString,
  IsHash,
} from 'class-validator';

export class CreateSessionDto {
  @ApiHideProperty()
  @IsOptional()
  @IsJWT()
  refreshToken?: string;

  @ApiHideProperty()
  @IsOptional()
  @IsUUID()
  refreshTokenJti?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userId!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  clientType!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsHash('sha256')
  @IsString()
  userAgentHash!: string;
}
