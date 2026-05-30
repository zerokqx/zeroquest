
import { applyDecorators, HttpCode, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiCookieAuth,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import {
  AuthToken,
  ApiClientType,
  ApiUserAgent,
  ClientType,
} from '@zeroquest/nest-shared';

export const ApiAuthRefresh = () =>
  applyDecorators(
    ApiClientType(),
    ApiOperation({
      summary: 'Обновление access и refresh токенов',
      description:
        'Обновляет access и refresh токены по refresh cookie и устанавливает новые httpOnly cookies.',
    }),
    ApiCookieAuth('zeroquestRefresh'),
    ApiUserAgent(),
    ApiOkResponse({
      description: 'Токены успешно обновлены',
      schema: {
        example: {
          message: 'Токены успешно обновлены',
        },
      },
    }),
    ApiUnauthorizedResponse({
      description: 'Refresh токен отсутствует, истёк или недействителен',
    }),
    ApiForbiddenResponse({
      description: 'Указан неподдерживаемый client type.',
    }),
  );

export const AuthRefreshPost = () =>
  applyDecorators(
    HttpCode(200),
    ClientType('web'),
    AuthToken('refresh'),
    ApiAuthRefresh(),
  );
