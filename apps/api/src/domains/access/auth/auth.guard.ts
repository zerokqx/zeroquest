import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
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
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);

  constructor(
    private readonly tokenService: TokenService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
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

    const token = extractTokenFromCookie(request, tokenType);

    if (!token) {
      this.logger.warn(
        `Missing ${tokenType} cookie on ${request.method} ${request.originalUrl}`,
      );
      throw new UnauthorizedException(`Missing ${tokenType} cookie`);
    }

    try {
      const payload =
        await this.tokenService.verify(token);
      if (payload.type !== tokenType) {
        this.logger.warn(
          `Token type mismatch on ${request.method} ${request.originalUrl}: expected=${tokenType}, actual=${payload.type}`,
        );
        throw new UnauthorizedException(`Invalid ${tokenType} token`);
      }
      request.user = payload;
    } catch {
      this.logger.warn(
        `Token verify failed on ${request.method} ${request.originalUrl}`,
      );
      throw new UnauthorizedException(`Invalid ${tokenType} token`);
    }
    return true;
  }
}
