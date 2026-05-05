import { type Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { getRequestCookie } from '@zeroquest/nest-shared';
import { COOKIE_NAME } from '@zeroquest/constants';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@/config/configuration';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  JwtPayloadSchema,
  JwtPayloadSchemaType,
} from '../token/dto/schemas/payload.schema';
import { TokenService } from '../token/token.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService<EnvironmentVariables>,
    private readonly tokenService: TokenService,
  ) {
    const secret = config.get('jwt', { infer: true })?.secret;
    if (!secret) throw new Error('SECRET IS NOT DEFINED');
    super({
      ignoreExpiration: false,
      secretOrKey: secret,
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request): string | null => {
          const cookie = getRequestCookie(req, COOKIE_NAME.ACCESS) ?? null;
          return cookie;
        },
      ]),
    });
  }

  override async validate(payload: unknown): Promise<JwtPayloadSchemaType> {
    const parsed = await JwtPayloadSchema.safeParseAsync(payload);

    if (!parsed.success) {
      throw new UnauthorizedException('Invalid token payload');
    }

    if (parsed.data.type !== 'access') {
      throw new UnauthorizedException('Invalid token type');
    }

    await this.tokenService.getTrackedToken(parsed.data);

    return parsed.data;
  }
}
