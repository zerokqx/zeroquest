import { ApiProperty } from '@nestjs/swagger';
import { RESPONSE_CODES } from '@zeroquest/constants';

export class AuthenticatedOk {
  @ApiProperty()
  type = RESPONSE_CODES.AUTHENTICATED;

  @ApiProperty()
  data!: { refreshToken: string; accessToken: string };

  constructor(data: typeof this.data) {
    this.data = data;
  }
}
