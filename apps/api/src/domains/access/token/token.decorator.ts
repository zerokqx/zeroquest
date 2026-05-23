import { Request } from 'express';
import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthServiceTypes } from '@zeroquest/types';

interface JwtPayloadOptions {
  strict?: boolean;
}

const defaultOptions: JwtPayloadOptions = {
  strict: true,
};

export const JwtPayload = (options = defaultOptions) =>
  createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>();
    const payload = req?.user?.jwtPayload;

    if (payload) {
      return payload satisfies AuthServiceTypes.JwtPayloadSchemaType;
    }

    if (options?.strict === true) {
      throw new UnauthorizedException('Authenticated user payload is missing');
    }

    return undefined;
  })();
