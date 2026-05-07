import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import { AUTH_TOKEN_TYPE_KEY, IS_PUBLIC_KEY } from '@zeroquest/nest-shared';
import { AuthServiceTypes } from '@zeroquest/types';
import { isObservable, lastValueFrom, Observable } from 'rxjs';

const JwtAccessGuard = PassportAuthGuard('jwt-access');
const JwtRefreshGuard = PassportAuthGuard('jwt-refresh');

type GuardResult = boolean | Promise<boolean> | Observable<boolean>;

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly accessGuard = new JwtAccessGuard();
  private readonly refreshGuard = new JwtRefreshGuard();

  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const tokenType =
      this.reflector.getAllAndOverride<
        AuthServiceTypes.JwtPayloadSchemaType['type']
      >(AUTH_TOKEN_TYPE_KEY, [context.getHandler(), context.getClass()]) ??
      'access';

    const guard =
      tokenType === 'refresh' ? this.refreshGuard : this.accessGuard;

    return this.resolveGuardResult(guard.canActivate(context));
  }

  private async resolveGuardResult(result: GuardResult): Promise<boolean> {
    if (isObservable(result)) {
      return lastValueFrom(result);
    }

    return Boolean(await result);
  }
}
