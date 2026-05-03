import { EnvironmentVariables } from '@/config/configuration';
import { Request } from 'express';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { CSRF_PUBLIC_KEY } from './csrf.decorator';
import { CsrfService } from './csrf.service';
import { CustomRequest } from '@zeroquest/types';

const getCSRFHeader = (res: Request) => {
  const csrf = res.headers['x-csrf-token'];
  if (typeof csrf === 'string') return csrf.trim();
  if (Array.isArray(csrf) && typeof csrf[0] === 'string') {
    return csrf[0].trim();
  }
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
    private readonly csrfService: CsrfService,
  ) {
    this.isProduction = this.config.getOrThrow('app', {
      infer: true,
    }).isProduction;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isCsrfPublic = this.reflector.getAllAndOverride<boolean>(
      CSRF_PUBLIC_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (isCsrfPublic) return true;

    const req = context.switchToHttp().getRequest<CustomRequest>();

    const clientType = getClientTypeHeader(req);
    if (!this.isProduction && clientType === 'swagger') {
      return true;
    }

    if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
      return true;
    }

    const csrfHeader = getCSRFHeader(req);
    const csrfCookie = getCSRFCookie(req);

    if (csrfCookie !== csrfHeader)
      throw new ForbiddenException('CSRF not equals');

    if (!req.fingerprint)
      throw new UnauthorizedException('Fingerprint not found');
    const csrfFromRedis = await this.csrfService.getToken(req.fingerprint);
    if (typeof csrfFromRedis !== 'string') {
      throw new UnauthorizedException('Unknown CSRF');
    }
    if (csrfFromRedis !== csrfHeader) {
      throw new ForbiddenException('CSRF token is not tracked for fingerprint');
    }

    return true;
  }
}
