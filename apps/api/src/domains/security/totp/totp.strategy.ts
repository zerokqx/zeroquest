import { Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom'; // можно использовать passport-custom
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RESPONSE_CODES } from '@zeroquest/constants';
import { TotpService } from './totp.service';
import { CryptoService } from '@zeroquest/nest-shared';
import { verify } from 'otplib';

@Injectable()
export class TotpAuthStrategy extends PassportStrategy(Strategy, 'totp') {
  constructor(
    private readonly totpService: TotpService,
    private readonly cryptoService: CryptoService,
  ) {
    super();
  }
  override async validate(req: Request): Promise<Express.User> {
    const { token } = req.body ?? {};
    const user = req.user;
    if (!user) throw new UnauthorizedException();
    const totp = await this.totpService.getUserTotp(user.sub);
    if (!totp) return user;

    if (!token)
      throw new UnauthorizedException({ code: RESPONSE_CODES.TOTP_REQUIRED });
    const secret = this.cryptoService.decrypt({
      authTag: totp.authTag,
      ciphertext: totp.ciphertext,
      iv: totp.iv,
    });

    const { valid } = await verify({ secret, token });
    if (!valid)
      throw new UnauthorizedException({
        code: RESPONSE_CODES.TOTP_INVALID_CHALLANGE,
      });
    return user;
  }
}
