import { Response, Request, CookieOptions } from 'express';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService, User } from '@zeroquest/db';
import { generateSecret, generateURI, verify } from 'otplib';
import { CryptoService, getRequestCookie } from '@zeroquest/nest-shared';
import { type Tagged } from 'type-fest';
import { COOKIE_NAME } from '@zeroquest/constants';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@/config/configuration';
import { TotpSetupDto } from './dto/totp-setup.dto';
import { TotpToggleDto } from './dto/totp-toggle.dto';

export type SetupType = Tagged<string, 'Setup'>;

export interface SetupJwt {
  type: SetupType;
  uid: User['id'];
  authTag: string;
  iv: string;
  ciphertext: string;
}

@Injectable()
export class TotpService {
  private readonly isProd!: boolean;
  private readonly jwtSecret!: string;

  constructor(
    private readonly config: ConfigService<EnvironmentVariables>,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly cryptoService: CryptoService,
  ) {
    const isProd = this.config.getOrThrow('app.isProduction', { infer: true });
    const jwt = this.config.getOrThrow('jwt', { infer: true });
    if (!jwt.secret) throw new Error('JWT SECRET IS NOT DEFINED');

    this.isProd = isProd;
    this.jwtSecret = jwt.secret;
  }

  getUserTotp(id: User['id']) {
    console.log(id)
    return this.prisma.totpMfa.findUnique({ where: { userId: id } });
  }

  options(): CookieOptions {
    return {
      httpOnly: true,
      secure: this.isProd,
      sameSite: this.isProd ? 'none' : 'lax',
      path: '/',
    };
  }
  async createSetup(res: Response, uid: User['id']) {
    const totp = await this.getUserTotp(uid);
    if (totp) throw new BadRequestException('Totp already exists');
    const secret = generateSecret();
    const encrypted = this.cryptoService.encrypt(secret);

    const jwtPayload: SetupJwt = {
      type: 'setup' as SetupType,
      uid,
      ...encrypted,
    };

    const jwt = await this.jwtService.signAsync<SetupJwt>(jwtPayload, {
      secret: this.jwtSecret,
      expiresIn: '5m',
    });
    const uri = generateURI({ issuer: 'ZeroQuest VPN', label: 'TEST', secret });
    res.cookie(COOKIE_NAME.TOTP_SETUP_JWT, jwt, this.options());
    return { uri };
  }

  async validateSetup(req: Request, res: Response, body: TotpSetupDto) {
    const setupCookie = getRequestCookie(req, COOKIE_NAME.TOTP_SETUP_JWT);
    if (!setupCookie)
      throw new BadRequestException('Setup cookie is not defined.');
    const { authTag, ciphertext, iv, uid } =
      await this.jwtService.verifyAsync<SetupJwt>(setupCookie, {
        secret: this.jwtSecret,
      });
    const secret = this.cryptoService.decrypt({ authTag, ciphertext, iv });

    const { valid } = await verify({ secret, token: body.value });
    if (!valid) throw new BadRequestException('Not valid');
    const totp = await this.prisma.totpMfa.create({
      data: { user: { connect: { id: uid } }, authTag, ciphertext, iv },
    });
    res.clearCookie(COOKIE_NAME.TOTP_SETUP_JWT, this.options());
    return totp;
  }

  async toggle(userId: User['id'], { status }: TotpToggleDto) {
    return this.prisma.totpMfa.update({
      where: {
        userId,
      },
      data: { enabled: status },
    });
  }
}
