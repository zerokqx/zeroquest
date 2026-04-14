import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPubic';
export const AUTH_TOKEN_TYPE_KEY = 'authTokenType';

export type AuthTokenType = 'access' | 'refresh';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
export const AuthToken = (type: AuthTokenType) =>
  SetMetadata(AUTH_TOKEN_TYPE_KEY, type);

export const AuthPayload = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request?.user;
    if (user) {
      return user;
    }
    throw new UnauthorizedException();
  },
);
