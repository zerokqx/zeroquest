import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';
import type { AuthServiceTypes } from '@zeroquest/types';

import { ROLE_KEY } from './role.decorator';

type AuthenticatedRequest = Request & {
  user?: AuthServiceTypes.JwtPayload;
};

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const allowedRoles =
      this.reflector.getAllAndOverride<AuthServiceTypes.UserRole[]>(ROLE_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

    if (!allowedRoles?.length) {
      return true;
    }

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const userRole = request.user?.role;

    if (!userRole || !allowedRoles.includes(userRole)) {
      throw new ForbiddenException();
    }

    return true;
  }
}
