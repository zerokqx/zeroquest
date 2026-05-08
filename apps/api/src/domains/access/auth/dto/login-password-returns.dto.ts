import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { RESPONSE_CODES } from '@zeroquest/constants';

export class TotpRequired {
  @ApiProperty()
  type = RESPONSE_CODES.TOTP_REQUIRED;

  @ApiProperty()
  data!: {
    challengeId: string;
  };

  constructor(data: typeof this.data) {
    this.data = data;
  }
}

export class AuthenticatedOk {
  @ApiProperty()
  type = RESPONSE_CODES.AUTHENTICATED;

  @ApiProperty()
  data!: { refreshToken: string; accessToken: string };

  constructor(data: typeof this.data) {
    this.data = data;
  }
}
