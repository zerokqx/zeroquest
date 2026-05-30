import { Injectable } from '@nestjs/common';
import { PrismaService } from '@zeroquest/db';
import { nanoid } from 'nanoid';
import { TokenService } from '../../token/token.service';
import { SessionService } from '../../session/session.service';
import { AuthenticatedOk } from '../dto/login-password-returns.dto';
import { RegisterService } from '../register/register.service';

@Injectable()
export class GoogleService {
  constructor(
    private readonly registerService: RegisterService,
    private readonly prisma: PrismaService,
    private readonly tokenService: TokenService,
    private readonly sessionService: SessionService,
  ) {}
  async googleLogin(login: string, ua: string) {
    let user = await this.prisma.user.findUnique({ where: { login } });
    if (!user) {
      user = await this.registerService.register(login);
    }
    const sid = nanoid();
    const [tokens, inputs] = await this.tokenService.createTokenPair({
      sid,
      sub: user.id,
    });
    await this.sessionService.createSession({
      ajti: inputs.accessTokenJti,
      rjti: inputs.refreshTokenJti,
      sid,
      ua,
      uid: user.id,
    });
    return new AuthenticatedOk(tokens);
  }
}
