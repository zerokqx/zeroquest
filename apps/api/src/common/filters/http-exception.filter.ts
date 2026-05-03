import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import type { Request, Response } from 'express';

type HttpExceptionResponseBody = {
  message?: string | string[];
  error?: string;
  [key: string]: unknown;
};

type NormalizedHttpException = {
  message: string;
  error?: string;
  details?: unknown;
};

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const rawResponse = exception.getResponse();
    const normalized = this.normalizeResponse(rawResponse, exception);

    response.status(status).json({
      statusCode: status,
      message: normalized.message,
      ...(normalized.error ? { error: normalized.error } : {}),
      ...(normalized.details !== undefined
        ? { details: normalized.details }
        : {}),
      timestamp: new Date().toISOString(),
      path: request.originalUrl,
    });
  }

  private normalizeResponse(
    rawResponse: string | object,
    exception: HttpException,
  ): NormalizedHttpException {
    if (typeof rawResponse === 'string') {
      return { message: rawResponse };
    }

    const body = rawResponse as HttpExceptionResponseBody;
    const { message, error, ...rest } = body;

    if (Array.isArray(message)) {
      return {
        message: message[0] ?? exception.message,
        error,
        details: {
          messages: message,
          ...rest,
        },
      };
    }

    if (typeof message === 'string' && message.trim()) {
      return {
        message,
        error,
        details: Object.keys(rest).length > 0 ? rest : undefined,
      };
    }

    if (typeof error === 'string' && error.trim()) {
      return {
        message: error,
        error,
        details: Object.keys(rest).length > 0 ? rest : undefined,
      };
    }

    return {
      message: exception.message || 'Request failed',
      details: Object.keys(rest).length > 0 ? rest : undefined,
    };
  }
}
