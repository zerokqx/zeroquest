import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { IS_PUBLIC_KEY } from './auth.decorator';
import type { AuthServiceTypes } from '@zeroquest/types';

type AuthenticatedRequest = Request & {
  user?: AuthServiceTypes.JwtPayload;
};

function extractTokenFromCookie(req: Request): string | undefined {
  return req.cookies?.zeroquestAccess;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();

    const token = extractTokenFromCookie(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload =
        await this.jwtService.verifyAsync<AuthServiceTypes.JwtPayload>(token);
      if (payload.type !== 'access') throw new UnauthorizedException();
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
}
