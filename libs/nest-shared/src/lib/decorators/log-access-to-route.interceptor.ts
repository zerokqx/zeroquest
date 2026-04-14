import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import type { AuthServiceTypes } from '@zeroquest/types';
import type { Request } from 'express';
import { Observable, tap } from 'rxjs';

type RequestWithIdentity = Request & {
  user?: AuthServiceTypes.JwtPayload;
  clientType?: string;
};

@Injectable()
export class LogAccessToRouteInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LogAccessToRouteInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<RequestWithIdentity>();
    const forwardedForHeader = request.headers['x-forwarded-for'];
    const userAgentHeader = request.headers['user-agent'];
    const refererHeader = request.headers.referer;
    const originHeader = request.headers.origin;
    const hostHeader = request.headers.host;

    const forwardedFor = Array.isArray(forwardedForHeader)
      ? forwardedForHeader[0]
      : forwardedForHeader;
    const userAgent = Array.isArray(userAgentHeader)
      ? userAgentHeader[0]
      : userAgentHeader;
    const referer = Array.isArray(refererHeader)
      ? refererHeader[0]
      : refererHeader;
    const origin = Array.isArray(originHeader) ? originHeader[0] : originHeader;
    const host = Array.isArray(hostHeader) ? hostHeader[0] : hostHeader;

    const fingerprint = {
      method: request.method,
      route: request.originalUrl,
      ip: request.ip,
      forwardedFor,
      remoteAddress: request.socket.remoteAddress,
      userAgent,
      clientType: request.clientType,
      referer,
      origin,
      host,
      auth: request.user
        ? {
            sub: request.user.sub,
            login: request.user.login,
            role: request.user.role,
            sid: request.user.sid,
            type: request.user.type,
          }
        : null,
    };

    return next.handle().pipe(
      tap(() => {
        this.logger.log(
          `Доступ к роуту получен: ${JSON.stringify(fingerprint)}`,
        );
      }),
    );
  }
}
