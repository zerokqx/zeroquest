import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { COOKIE_NAME } from '@zeroquest/constants';
import { getRequestCookie } from '@zeroquest/nest-shared';
import { type Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EnvironmentVariables } from '@/config/configuration';
import {
  JwtPayloadSchema,
  JwtPayloadSchemaType,
} from '../../token/dto/schemas/payload.schema';
import { TokenService } from '../../token/token.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
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
        (req: Request): string | null =>
          getRequestCookie(req, COOKIE_NAME.REFRESH) ?? null,
      ]),
    });
  }

  override async validate(payload: unknown): Promise<JwtPayloadSchemaType> {
    const parsed = await JwtPayloadSchema.safeParseAsync(payload);

    if (!parsed.success) {
      throw new UnauthorizedException('Invalid token payload');
    }

    if (parsed.data.type !== 'refresh') {
      throw new UnauthorizedException('Invalid token type');
    }

    await this.tokenService.getTrackedToken(parsed.data);

    return parsed.data;
  }
}
