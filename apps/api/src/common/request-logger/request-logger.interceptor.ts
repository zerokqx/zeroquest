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

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    const start = Date.now();

    const controller = context.getClass().name;
    const handler = context.getHandler().name;

    const ip =
      req.headers['x-forwarded-for']?.toString().split(',')[0].trim() ||
      req.socket?.remoteAddress ||
      req.ip;

    const method = req.method;
    const url = req.originalUrl || req.url;

    // 🔒 маскируем чувствительные данные
    const sanitize = (obj: any) => {
      if (!obj) return obj;

      const clone = { ...obj };

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

    const headers = sanitize(req.headers);
    const body = sanitize(req.body);
    const query = req.query;
    const params = req.params;

    this.logger.debug(
      this.stringify({
        type: 'request',
        ip,
        method,
        url,
        controller,
        handler,
        headers,
        body,
        query,
        params,
      }),
    );

    return next.handle().pipe(
      tap({
        next: (response) => {
          const duration = Date.now() - start;

          this.logger.debug(
            this.stringify({
              type: 'response',
              ip,
              method,
              url,
              controller,
              handler,
              status: res.statusCode,
              duration: `${duration}ms`,
              response,
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
              status: res.statusCode,
              duration: `${duration}ms`,
              message: error?.message,
            }),
          );
        },
      }),
    );
  }
}
