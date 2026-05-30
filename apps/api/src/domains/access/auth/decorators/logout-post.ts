import { applyDecorators, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import {
  ApiClientType,
  ApiUserAgent,
  ClientType,
} from '@zeroquest/nest-shared';

export const ApiAuthLogout = () =>
  applyDecorators(
    ApiOkResponse({
      description: 'Logout успешен',
    }),
    ApiOperation({
      summary: 'Logout сессии и удаление Cookie с клиента',
    }),
    ApiClientType(),
    ApiUserAgent(),
  );

export const AuthLogoutPost = () =>
  applyDecorators(Post('logout'), ClientType('web'), ApiAuthLogout());
