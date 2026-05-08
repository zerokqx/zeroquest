import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PrismaService, User } from '@zeroquest/db';
import { AuthServiceTypes } from '@zeroquest/types';
import { LoginTotpChallengeObject } from './types/totp-login.types';
import { verify } from 'otplib';
import { TotpEncrypt } from './totp.encrypt';
import { RESPONSE_CODES } from '@zeroquest/constants';

@Injectable()
export class TotpLoginService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,

    private readonly totpEncrypt: TotpEncrypt,
    private readonly prismaService: PrismaService,
  ) {}

  cacheKey(challengeId: string) {
    return `totp:login-validate:${challengeId}`;
  }

  async createNewValidationChallenge(
    login: User['login'],
    uid: User['id'],
    ct: AuthServiceTypes.JwtPayloadSchemaType['ct'],
    ua: AuthServiceTypes.JwtPayloadSchemaType['ua'],
  ) {
    const challengeId = crypto.randomUUID();
    const key = this.cacheKey(challengeId);
    await this.cacheManager.set<LoginTotpChallengeObject>(
      key,
      {
        login,
        attempts: 0,
        ct,
        ua,
        uid,
      },
      300_000,
    );
    return challengeId;
  }

  async validateVallue(challengeId: string, vallue: string) {
    const key = this.cacheKey(challengeId);
    const challenge =
      await this.cacheManager.get<LoginTotpChallengeObject>(key);
    if (!challenge)
      throw new BadRequestException({
        message: 'Totp validate not found',
        code: RESPONSE_CODES.TOTP_CHALLENGE_NOT_FOUND,
      });

    const totp = await this.prismaService.totpToken.findUnique({
      where: { userId: challenge.uid },
    });
    if (!totp) throw new BadRequestException('TOTP for user not found');

    const secret = this.totpEncrypt.decrypt(totp);
    const { valid } = await verify({
      secret,
      token: vallue.padStart(6, '0'),
    });

    if (valid) await this.cacheManager.del(key);
    return { valid, uid: challenge.uid };
  }
}
