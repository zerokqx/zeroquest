import { Request } from 'express';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CSRF_PUBLIC_KEY } from './csrf.decorator';

const getCSRFHeader = (res: Request) => {
  const csrf = res.headers['x-csrf-token'];
  console.log(csrf)
  if (typeof csrf === 'string') return csrf;
  throw new ForbiddenException('Not found CSRF Token Header');
};

const getCSRFCookie = (res: Request) => {
  const csrf = res.cookies['zeroquestCsrf'];
  console.log(csrf)
  if (typeof csrf === 'string') return csrf;
  throw new ForbiddenException('Not found CSRF Token Cookie');
};

@Injectable()
export class CsrfGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean>  {
    const isCsrfPublic = this.reflector.getAllAndOverride<boolean>(
      CSRF_PUBLIC_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (isCsrfPublic) return true;

    const req = context.switchToHttp().getRequest<Request>();
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
      return true;
    }

    // 2) исключения по URL
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
