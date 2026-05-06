import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthServiceTypes } from '@zeroquest/types';
import { hash, verify } from 'argon2';
import { EnvironmentVariables } from '@/config/configuration';
import {
  TokenCreateSchema,
  TokenCreateSchemaType,
} from './dto/schemas/token-create.schema';

@Injectable()
export class TokenService {
  private readonly jwtEnvironment: EnvironmentVariables['jwt'];

  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService<EnvironmentVariables>,
  ) {
    this.jwtEnvironment = this.config.getOrThrow('jwt', { infer: true });
  }

  async createTokenPair(payload: TokenCreateSchemaType): Promise<
    [
      tokens: { accessToken: string; refreshToken: string },
      jti: {
        accessTokenJti: string;
        refreshTokenJti: string;
      },
    ]
  > {
    const parsedPayload = await TokenCreateSchema.parseAsync(payload);
    const accessTokenJti = crypto.randomUUID();
    const refreshTokenJti = crypto.randomUUID();
    const accessPayload = {
      ...parsedPayload,
      type: 'access',
      jti: accessTokenJti,
    } satisfies AuthServiceTypes.JwtPayloadSchemaType;
    const accessToken = await this.jwtService.signAsync(accessPayload, {
      expiresIn: `${this.jwtEnvironment.accessExpireTimeMs}ms`,
    });

    const refreshPayload = {
      ...parsedPayload,
      type: 'refresh',
      jti: refreshTokenJti,
    } satisfies AuthServiceTypes.JwtPayloadSchemaType;

    const refreshToken = await this.jwtService.signAsync(refreshPayload, {
      expiresIn: `${this.jwtEnvironment.refreshExpireTimeMs}ms`,
    });
    return [
      { accessToken, refreshToken },
      { refreshTokenJti, accessTokenJti },
    ];
  }

  async decode(
    token: string,
  ): Promise<AuthServiceTypes.JwtPayloadSchemaType | null> {
    try {
      const decoded = AuthServiceTypes.JwtPayloadSchema.parse(
        this.jwtService.decode(token),
      );
      return decoded;
    } catch {
      throw new UnauthorizedException('Failed to decode JWT token');
    }
  }
  async verify(token: string): Promise<AuthServiceTypes.JwtPayloadSchemaType> {
    try {
      const tokenVerified =
        await this.jwtService.verifyAsync<AuthServiceTypes.JwtPayloadSchemaType>(
          token,
        );
      const payload =
        await AuthServiceTypes.JwtPayloadSchema.parseAsync(tokenVerified);
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
}
