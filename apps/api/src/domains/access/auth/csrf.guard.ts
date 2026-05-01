import { EnvironmentVariables } from '@/config/configuration';
import { Request } from 'express';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { CSRF_PUBLIC_KEY } from './csrf.decorator';

const getCSRFHeader = (res: Request) => {
  const csrf = res.headers['x-csrf-token'];
  if (typeof csrf === 'string') return csrf;
  throw new ForbiddenException('Not found CSRF Token Header');
};

const getCSRFCookie = (res: Request) => {
  const csrf = res.cookies['zeroquestCsrf'];
  if (typeof csrf === 'string') return csrf;
  throw new ForbiddenException('Not found CSRF Token Cookie');
};

const getClientTypeHeader = (req: Request) => {
  const raw = req.headers['x-client-type'];
  if (typeof raw === 'string') return raw.trim().toLowerCase();
  if (Array.isArray(raw) && typeof raw[0] === 'string') {
    return raw[0].trim().toLowerCase();
  }
  return null;
};

@Injectable()
export class CsrfGuard implements CanActivate {
  private readonly isProduction: boolean;

  constructor(
    private readonly reflector: Reflector,
    private readonly config: ConfigService<EnvironmentVariables>,
  ) {
    this.isProduction = this.config.getOrThrow('app', { infer: true }).isProduction;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean>  {
    const isCsrfPublic = this.reflector.getAllAndOverride<boolean>(
      CSRF_PUBLIC_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (isCsrfPublic) return true;

    const req = context.switchToHttp().getRequest<Request>();

    const clientType = getClientTypeHeader(req);
    if (!this.isProduction && clientType === 'swagger') {
      return true;
    }

  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
      return true;
    }

    const path = req.path;
    if (path === '/auth/csrf' || path.startsWith('/yookassa/webhook')) {
      return true;
    }
    const csrfHeader = getCSRFHeader(req)
    const csrfCookie  = getCSRFCookie(req)

    if(csrfCookie !== csrfHeader) throw new ForbiddenException('CSRF not equals')
    return true

  }
}
