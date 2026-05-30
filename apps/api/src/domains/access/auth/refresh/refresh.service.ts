import { Injectable } from '@nestjs/common';
import { AuthServiceTypes } from '@zeroquest/types';
import { SessionService } from '../../session/session.service';
import { TokenService } from '../../token/token.service';

@Injectable()
export class RefreshService {
  constructor(
    private readonly sessionService: SessionService,
    private readonly tokenService: TokenService,
  ) {}

  async refresh(refreshPayload: AuthServiceTypes.JwtPayloadSchemaType) {
    const session = (await this.sessionService.getSession(refreshPayload.sid))!;

    const [tokens, inputs] = await this.tokenService.createTokenPair({
      sid: session.sid,
      sub: session.uid,
    });

    await this.sessionService.updateSession(session.sid, {
      ajti: inputs.accessTokenJti,
      rjti: inputs.refreshTokenJti,
    });

    return tokens;
  }

}
