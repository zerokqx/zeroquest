import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthServiceTypes } from '@zeroquest/types';

export const IS_PUBLIC_KEY = 'isPubic';
export const AUTH_TOKEN_TYPE_KEY = 'authTokenType';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const AuthToken = (
  type: AuthServiceTypes.JwtPayloadSchemaType['type'],
) => SetMetadata(AUTH_TOKEN_TYPE_KEY, type);

export const User = createParamDecorator(
  (
    _data: unknown,
    ctx: ExecutionContext,
  ): AuthServiceTypes.JwtPayloadSchemaType => {
    const req = ctx.switchToHttp().getRequest();
    const user = req?.user;
    if (user) {
      return user satisfies AuthServiceTypes.JwtPayloadSchemaType;
    }
    throw new UnauthorizedException('Authenticated user payload is missing');
  },
);
