import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import type { Request } from 'express';
import type { AuthServiceTypes } from '@zeroquest/types';
import {
  AUTH_TOKEN_TYPE_KEY,
  type AuthTokenType,
  IS_PUBLIC_KEY,
} from '@zeroquest/nest-shared';
import { TokenService } from '../token/token.service';

type AuthenticatedRequest = Request & {
  user?: AuthServiceTypes.JwtPayload;
};

function extractTokenFromCookie(
  request: Request,
  tokenType: AuthTokenType,
): string | undefined {
  return tokenType === 'refresh'
    ? request.cookies?.zeroquestRefresh
    : request.cookies?.zeroquestAccess;
}

@Injectable()
export class AuthGuard
  extends PassportAuthGuard('jwt')
  implements CanActivate
{
  private readonly logger = new Logger(AuthGuard.name);

  constructor(
    private readonly tokenService: TokenService,
    private readonly reflector: Reflector,
  ) {
    super();
  }

  override async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const tokenType =
      this.reflector.getAllAndOverride<AuthTokenType>(AUTH_TOKEN_TYPE_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? 'access';

    if (tokenType === 'access') {
      const activated = await super.canActivate(context);
      return Boolean(activated);
    }

    const token = extractTokenFromCookie(request, 'refresh');

    if (!token) {
      this.logger.warn(
        `Missing refresh cookie on ${request.method} ${request.originalUrl}`,
      );
      throw new UnauthorizedException('Missing refresh cookie');
    }

    try {
      const payload = await this.tokenService.verify(token);
      if (payload.type !== 'refresh') {
        this.logger.warn(
          `Token type mismatch on ${request.method} ${request.originalUrl}: expected=refresh, actual=${payload.type}`,
        );
        throw new UnauthorizedException('Invalid refresh token');
      }
      request.user = payload;
    } catch {
      this.logger.warn(
        `Refresh token verify failed on ${request.method} ${request.originalUrl}`,
      );
      throw new UnauthorizedException('Invalid refresh token');
    }

    return true;
  }

  override handleRequest<TUser = AuthServiceTypes.JwtPayload>(
    err: unknown,
    user: TUser | false | null,
  ): TUser {
    if (err || !user) {
      this.logger.warn('Access token validation failed in passport strategy');
      throw new UnauthorizedException('Invalid access token');
    }

    return user;
  }
}
