import { ApiProperty } from '@nestjs/swagger';
import { RESPONSE_CODES, ResponseCodes } from '@zeroquest/constants';
import { IsString, IsUUID, Length } from 'class-validator';

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

export class LoginTotpValidateDto {
  @IsUUID()
  @ApiProperty()
  challengeId!: string;

  @ApiProperty()
  @IsString()
  @Length(6,6)
  vallue!: string;
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
