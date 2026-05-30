import { CsrfPublic } from '@/domains/security/csrf/csrf.decorator';
import { applyDecorators, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import {
  Public,
  ApiUserAgent,
  ApiClientType,
  ClientType,
} from '@zeroquest/nest-shared';

export const ApiAuthCsrf = () =>
  applyDecorators(
    ApiOperation({ description: 'Выдает CSRF токен' }),
    ApiUserAgent(),
    ApiClientType(),
  );

export const AuthCsrfGet = () =>
  applyDecorators(
    CsrfPublic(),
    Public(),
    ClientType('web'),
    Get('csrf'),
    ApiAuthCsrf(),
  );
