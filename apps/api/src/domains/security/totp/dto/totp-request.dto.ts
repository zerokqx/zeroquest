import { IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TotpRequest {
  @ApiProperty({
    description: 'TOTP verification code',
    required: false,
    example: '123456',
  })
  @IsString()
  @Length(6, 6)
  @IsOptional()
  token?: string;
}
