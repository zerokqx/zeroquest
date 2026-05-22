import { ApiProperty } from '@nestjs/swagger';
import { RESPONSE_CODES, ResponseCodes } from '@zeroquest/constants';

export type LoginResponseType =
  | typeof RESPONSE_CODES.AUTHENTICATED
  | typeof RESPONSE_CODES.AUTHENTICATED_FAILED_BECAUSE_USER_IS_BANNED;

export class LoginAuthenticatedResponseDto {
  @ApiProperty({
    enum: [RESPONSE_CODES.AUTHENTICATED],
    example: RESPONSE_CODES.AUTHENTICATED,
  })
  type!: ResponseCodes['AUTHENTICATED'];
}
