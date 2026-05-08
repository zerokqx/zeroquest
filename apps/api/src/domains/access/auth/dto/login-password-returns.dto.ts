import { RESPONSE_CODES, ResponseCodes } from '@zeroquest/constants';

export class TotpRequired {
  type = RESPONSE_CODES.TOTP_REQUIRED;
  data!: {
    challengeId: string;
  };

  constructor(data: typeof this.data) {
    this.data = data;
  }
}

export class AuthenticatedOk {
  type = RESPONSE_CODES.AUTHENTICATED;
  data!: { refreshToken: string; accessToken: string };

  constructor(data: typeof this.data) {
    this.data = data;
  }
}
