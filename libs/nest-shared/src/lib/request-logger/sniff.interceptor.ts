import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class SniffInterceptor implements NestInterceptor {
  private readonly logger = new Logger(SniffInterceptor.name);

  private stringify(value: unknown) {
    return JSON.stringify(value, (_, currentValue) =>
      typeof currentValue === 'bigint'
        ? currentValue.toString()
        : currentValue,
    );
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const start = Date.now();

    const controller = context.getClass().name;
    const handler = context.getHandler().name;
    const ip =
      request.headers['x-forwarded-for']?.toString().split(',')[0].trim() ||
      request.socket?.remoteAddress ||
      request.ip;
    const method = request.method;
    const url = request.originalUrl || request.url;

    const sanitize = (value: Record<string, unknown> | undefined) => {
      if (!value) {
        return value;
      }

      const clone = { ...value };
      const hiddenFields = [
        'password',
        'token',
        'authorization',
        'accessToken',
        'refreshToken',
      ];

      for (const key of hiddenFields) {
        if (clone[key]) {
          clone[key] = '***';
        }
      }

      return clone;
    };

    this.logger.debug(
      this.stringify({
        type: 'request',
        ip,
        method,
        url,
        controller,
        handler,
        headers: sanitize(request.headers),
        body: sanitize(request.body),
        query: request.query,
        params: request.params,
      }),
    );

    return next.handle().pipe(
      tap({
        next: (payload) => {
          const duration = Date.now() - start;

          this.logger.debug(
            this.stringify({
              type: 'response',
              ip,
              method,
              url,
              controller,
              handler,
              status: response.statusCode,
              duration: `${duration}ms`,
              response: payload,
            }),
          );
        },
        error: (error) => {
          const duration = Date.now() - start;

          this.logger.error(
            this.stringify({
              type: 'error',
              ip,
              method,
              url,
              controller,
              handler,
              status: response.statusCode,
              duration: `${duration}ms`,
              message: error?.message,
            }),
          );
        },
      }),
    );
  }
}
