import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { AuthServiceTypes } from '@zeroquest/types';
import { JwtDecodePipe } from './jwt-decode.pipe';

const JwtCookie = createParamDecorator(
  (
    cookieName: keyof AuthServiceTypes.AuthCookie,
    ctx: ExecutionContext,
  ): string | undefined => {
    const request = ctx.switchToHttp().getRequest<{
      cookies?: Partial<AuthServiceTypes.AuthCookie>;
    }>();
    return request?.cookies?.[cookieName];
  },
);

export const JwtDecode = (
  cookieName: keyof AuthServiceTypes.AuthCookie,
): ParameterDecorator => JwtCookie(cookieName, JwtDecodePipe);
