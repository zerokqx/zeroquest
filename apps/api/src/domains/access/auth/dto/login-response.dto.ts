import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RESPONSE_CODES, ResponseCodes } from '@zeroquest/constants';
import { IsString, IsUUID, Max } from 'class-validator';

export type LoginResponseType =
  | typeof RESPONSE_CODES.TOTP_REQUIRED
  | typeof RESPONSE_CODES.AUTHENTICATED
  | typeof RESPONSE_CODES.AUTHENTICATED_FAILED_BECAUSE_USER_IS_BANNED;

export class LoginAuthenticatedResponseDto {




  @ApiProperty({
    enum: [RESPONSE_CODES.AUTHENTICATED],
    example: RESPONSE_CODES.AUTHENTICATED,
  })
  type!: ResponseCodes['AUTHENTICATED'];




}

export class LoginDto {
  @IsUUID()
  @ApiProperty()
  challengeId!: string;

  @ApiProperty()
  @IsString()
  @Max(6)
  value!: string;
}

export class LoginTotpRequiredResponseDto {
  @ApiProperty({
    enum: [RESPONSE_CODES.TOTP_REQUIRED],
    example: RESPONSE_CODES.TOTP_REQUIRED,
  })
  type!: ResponseCodes['TOTP_REQUIRED'];

  @ApiProperty()
  @IsUUID()
  challengeId!: string;

  constructor(data: LoginTotpRequiredResponseDto) {
    Object.assign(this, data);
  }
}
