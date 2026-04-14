import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import type { AuthServiceTypes } from '@zeroquest/types';

import {
  AUTH_TOKEN_TYPE_KEY,
  type AuthTokenType,
  IS_PUBLIC_KEY,
} from './auth.decorator';

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
  constructor(
    private readonly jwtService: JwtService,
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
      throw new UnauthorizedException();
    }

    try {
      const payload =
        await this.jwtService.verifyAsync<AuthServiceTypes.JwtPayload>(token);
      if (payload.type !== tokenType) {
        throw new UnauthorizedException();
      }
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
}
