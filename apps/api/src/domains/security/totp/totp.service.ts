import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { generate, generateSecret, generateURI, verify } from 'otplib';
import { EncryptData } from './types/encrypt.types';
import {
  ChallengeObject,
  TotpTokenData,
  ValidateObject,
} from './types/totp.types';
import { PrismaService, User } from '@zeroquest/db';
import { RESPONSE_CODES } from '@zeroquest/constants';
import { TotpEncrypt } from './totp.encrypt';

@Injectable()
export class TotpService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly prisma: PrismaService,
    private readonly totpEncrypt: TotpEncrypt,
  ) {}

  cacheKey(challangeId: string) {
    return `totp:challenge:${challangeId}`;
  }

  async generateNewTotp(userId: User['id']): Promise<TotpTokenData> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('User is not found');

    const secret = generateSecret();
    const token = await generate({ secret });
    const uri = generateURI({
      issuer: 'ZeroQuest VPN',
      label: user.login,
      secret,
    });
    return {
      secret,
      token,
      uri,
    };
  }

  async createNewTotpChallenge(encrypted: EncryptData) {
    const challengeId = crypto.randomUUID();
    const key = this.cacheKey(challengeId);
    await this.cacheManager.set<ChallengeObject>(
      key,
      { ...encrypted, attempts: 0 },
      300000,
    );

    return challengeId;
  }

  createUserTotp(userId: User['id'], encrypted: EncryptData) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        totp: {
          create: encrypted,
        },
      },
    });
  }

  async validateChallenge(
    challengeId: string,
    value: string,
  ): Promise<ValidateObject> {
    const key = this.cacheKey(challengeId);
    const raw = await this.cacheManager.get<ChallengeObject>(key);

    console.log(raw);
    if (!raw)
      throw new NotFoundException({
        message: 'Challange not found',
        code: RESPONSE_CODES.TOTP_CHALLENGE_NOT_FOUND,
      });

    const { attempts, ...encrypted } = raw;

    // if(attempts > 5) throw new

    const secret = this.totpEncrypt.decrypt(encrypted);
    const { valid } = await verify({
      token: value.padStart(6, '0'),
      secret,
    });

    if (!valid) {
      throw new UnauthorizedException({
        message: 'Invalid TOTP code',
        code: RESPONSE_CODES.TOTP_INVALID_CHALLANGE,
      });
    }

    await this.cacheManager.del(key);
    return {
      valid: true,
      encrypted,
    };
  }

  async removeTotp(userId: User['id'], value: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },

      include: { totp: true },
    });
    if (!user || !user.totp)
      throw new BadRequestException('User or totp not found');
    const secret = this.totpEncrypt.decrypt(user.totp);
    const { valid } = await verify({
      token: value.padStart(6, '0'),
      secret,
    });

    if (valid) {
      await this.prisma.totpToken.delete({ where: { id: user.totp.id } });
    } else {
      throw new BadRequestException({
        message: 'Invalid TOTP code',
        code: 'TOTP_INVALIDE',
      });
    }
  }
}
