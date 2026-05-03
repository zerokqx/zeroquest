import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CreateTokenPairDto } from './dto/create-token-pair.dto';
import { AuthServiceTypes } from '@zeroquest/types';
import { hash, verify } from 'argon2';
import { EnvironmentVariables } from '@/config/configuration';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { JwtPayloadSchema } from './dto/schemas/payload.schema';
import { createHash } from 'crypto';

type TokenTrackKey = Pick<
  AuthServiceTypes.JwtPayload,
  'sub' | 'jti' | 'sid' | 'type'
>;

@Injectable()
export class TokenService {
  private readonly jwtEnvironment: EnvironmentVariables['jwt'];
  private readonly logger = new Logger(TokenService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService<EnvironmentVariables>,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    this.jwtEnvironment = this.config.getOrThrow('jwt', { infer: true });
  }
  tokenRedisKey({ sub, jti, sid, type }: TokenTrackKey) {
    return `user:${sub}:${createHash('sha-256').update(`${jti}:${sid}:${type}`).digest('hex')}`;
  }

  async createTokenPair(payload: CreateTokenPairDto): Promise<
    [
      tokens: { accessToken: string; refreshToken: string },
      jti: {
        accessTokenJti: string;
        refreshTokenJti: string;
      },
    ]
  > {
    const accessTokenJti = crypto.randomUUID();
    const refreshTokenJti = crypto.randomUUID();
    const accessPayload = {
      ...payload,
      type: 'access',
      jti: accessTokenJti,
    } satisfies AuthServiceTypes.JwtPayload;
    const accessToken = await this.jwtService.signAsync(accessPayload, {
      expiresIn: `${this.jwtEnvironment.accessExpireTimeMs}ms`,
    });

    const refreshPayload = {
      ...payload,
      type: 'refresh',
      jti: refreshTokenJti,
    } satisfies AuthServiceTypes.JwtPayload;

    const refreshToken = await this.jwtService.signAsync(refreshPayload, {
      expiresIn: `${this.jwtEnvironment.refreshExpireTimeMs}ms`,
    });
    return [
      { accessToken, refreshToken },
      { refreshTokenJti, accessTokenJti },
    ];
  }

  async createTrackedTokenPair(payload: CreateTokenPairDto) {
    const [tokens, jti] = await this.createTokenPair(payload);
    const accessPayload = {
      ...payload,
      type: 'access',
      jti: jti.accessTokenJti,
    } satisfies AuthServiceTypes.JwtPayload;
    const refreshPayload = {
      ...payload,
      type: 'refresh',
      jti: jti.refreshTokenJti,
    } satisfies AuthServiceTypes.JwtPayload;
    this.logger.verbose('Создание track записей в redis');
    await Promise.all([
      this.trackToken(accessPayload),
      this.trackToken(refreshPayload),
    ]);
    return [tokens, jti] as const;
  }
  decode(token: string): AuthServiceTypes.JwtPayload | null {
    try {
      const decoded = JwtPayloadSchema.parse(this.jwtService.decode(token));
      return decoded;
    } catch {
      throw new UnauthorizedException('Failed to decode JWT token');
    }
  }
  async verify(token: string): Promise<AuthServiceTypes.JwtPayload> {
    try {
      const tokenVerified =
        await this.jwtService.verifyAsync<AuthServiceTypes.JwtPayload>(token);
      const payload = JwtPayloadSchema.parse(tokenVerified);

      await this.getTrackedToken(payload);
      return payload;
    } catch {
      throw new UnauthorizedException('Failed to verify JWT token');
    }
  }
  async hashToken(token: string) {
    return await hash(token);
  }
  async compareHashWitPlain(storedHash: string, plainText: string) {
    return await verify(storedHash, plainText);
  }

  async trackToken(payload: AuthServiceTypes.JwtPayload, ttlMs?: number) {
    try {
      const key = this.tokenRedisKey(payload);
      const ttl =
        ttlMs ??
        (payload.type === 'access'
          ? this.jwtEnvironment.accessExpireTimeMs
          : this.jwtEnvironment.refreshExpireTimeMs);
      JwtPayloadSchema.parse(payload);
      this.logger.verbose(`Создания токена по ключу - ${key}`);
      return this.cacheManager.set(key, JSON.stringify(payload), ttl);
    } catch (e){
      throw new UnauthorizedException('Failed to store token state',e.message);
    }
  }

  async getTrackedToken(
    payload: AuthServiceTypes.JwtPayload,
  ): Promise<AuthServiceTypes.JwtPayload> {
    const key = this.tokenRedisKey(payload);
    this.logger.verbose(`Получение токенов в redis по ключу - ${key}`);
    const tokenRaw = await this.cacheManager.get<string>(key);
    if (!tokenRaw)
      throw new UnauthorizedException('Token is not tracked or expired');
    return JSON.parse(tokenRaw) satisfies AuthServiceTypes.JwtPayload;
  }

  async removeTrackedToken(payload: TokenTrackKey) {
    const key = this.tokenRedisKey(payload);
    this.logger.verbose(`Удаление токенов redis по ключу - ${key}`);
    return this.cacheManager.del(key);
  }
}
