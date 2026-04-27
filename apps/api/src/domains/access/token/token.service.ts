import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { CreateTokenPairDto } from './dto/create-token-pair.dto';
import { AuthServiceTypes } from '@zeroquest/types';
import { hash, verify } from 'argon2';
import { EnvironmentVariables } from '@/config/configuration';

@Injectable()
export class TokenService {
  private readonly jwtEnvironment: EnvironmentVariables['jwt'];

  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService<EnvironmentVariables>,
  ) {
    this.jwtEnvironment = this.config.getOrThrow('jwt', { infer: true });
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
    const accessToken = await this.jwtService.signAsync(
      {
        ...payload,
        type: 'access',
        jti: accessTokenJti,
      } satisfies AuthServiceTypes.JwtPayload,
      {
        expiresIn: `${this.jwtEnvironment.accessExpireTimeMs}ms`,
      },
    );

    const refreshToken = await this.jwtService.signAsync(
      {
        ...payload,
        type: 'refresh',
        jti: refreshTokenJti,
      } satisfies AuthServiceTypes.JwtPayload,
      {
        expiresIn: `${this.jwtEnvironment.refreshExpireTimeMs}ms`,
      },
    );
    return [
      { accessToken, refreshToken },
      { refreshTokenJti, accessTokenJti },
    ];
  }

  async verify(token: string): Promise<AuthServiceTypes.JwtPayload> {
    try {
      return (await this.jwtService.verifyAsync<AuthServiceTypes.JwtPayload>(
        token,
      )) satisfies AuthServiceTypes.JwtPayload;
    } catch {
      throw new UnauthorizedException();
    }
  }
  async hashToken(token: string) {
    return await hash(token);
  }
  async compareHashWitPlain(storedHash: string, plainText: string) {
    return await verify(storedHash, plainText);
  }
}
