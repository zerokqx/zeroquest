import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import {
  AUTH_TOKEN_TYPE_KEY,
  type AuthTokenType,
  IS_PUBLIC_KEY,
} from '@zeroquest/nest-shared';
import { isObservable, lastValueFrom } from 'rxjs';

const JwtAccessGuard = PassportAuthGuard('jwt-access');
const JwtRefreshGuard = PassportAuthGuard('jwt-refresh');

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly accessGuard = new JwtAccessGuard();
  private readonly refreshGuard = new JwtRefreshGuard();

  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const tokenType =
      this.reflector.getAllAndOverride<AuthTokenType>(AUTH_TOKEN_TYPE_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? 'access';

    const guard =
      tokenType === 'refresh' ? this.refreshGuard : this.accessGuard;
    const result = guard.canActivate(context);
    if (isObservable(result)) {
      return lastValueFrom(result);
    }
    return Boolean(await result);
  }
}
