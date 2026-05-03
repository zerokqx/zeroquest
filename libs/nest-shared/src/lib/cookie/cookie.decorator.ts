import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { getRequestCookie } from '../request/get-request-cookie';

export const Cookies = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<{
      cookies?: Record<string, unknown>;
    }>();

    return data ? getRequestCookie(request, data) : request.cookies;
  },
);
