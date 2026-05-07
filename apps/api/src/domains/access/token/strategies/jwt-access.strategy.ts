import { type Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { getRequestCookie } from '@zeroquest/nest-shared';
import { COOKIE_NAME } from '@zeroquest/constants';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@/config/configuration';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthServiceTypes } from '@zeroquest/types';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(
  Strategy,
  'jwt-access',
) {
  constructor(
    config: ConfigService<EnvironmentVariables>,
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

  override async validate(payload: unknown): Promise<AuthServiceTypes.JwtPayloadSchemaType> {
    const parsed = await AuthServiceTypes.JwtPayloadSchema.safeParseAsync(payload);

    if (!parsed.success) {
      throw new UnauthorizedException('Invalid token payload');
    }

    if (parsed.data.type !== 'access') {
      throw new UnauthorizedException('Invalid token type');
    }


    return parsed.data;
  }
}
