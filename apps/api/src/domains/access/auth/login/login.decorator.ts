import { TotpApiBody } from '@/domains/security/totp/totp.decorator';
import { applyDecorators, Post, UseGuards } from '@nestjs/common';
import {
  ApiConsumes,
  ApiOperation,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { RESPONSE_CODES } from '@zeroquest/constants';
import { LoginDto } from './login.dto';
import {
  ApiClientType,
  ApiUserAgent,
  ClientType,
  Public,
} from '@zeroquest/nest-shared';
import { TotpGuard } from '@/domains/security/totp/totp.guard';
import { LocalGuard } from '../local.guard';

export const ApiAuthPassword = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Вход по логину и паролю',
      description:
        'Авторизует пользователя по логину и паролю. После успешного входа устанавливает access и refresh токены в httpOnly cookies.',
    }),
    ApiClientType(),
    ApiUserAgent(),
    ApiConsumes('application/json'),
    TotpApiBody({
      type: LoginDto,
      description: 'Данные для входа',
    }),
    ApiBadRequestResponse({
      description: 'Некорректные входные данные',
    }),
    ApiUnauthorizedResponse({
      description: 'Неверный логин или пароль',
    }),
    ApiForbiddenResponse({
      description: 'Указан неподдерживаемый client type.',
    }),
    ApiOkResponse({
      description: 'Пользователь успешно авторизован',
      schema: {
        oneOf: [{}],
        example: {
          message: 'OK',
          code: RESPONSE_CODES.AUTHENTICATED,
        },
      },

    }),
  );

export const AuthPasswordPost = () =>
  applyDecorators(
    UseGuards(LocalGuard, TotpGuard),
    ApiAuthPassword(),
    ClientType('web'),
    ApiAuthPassword(),
    Public(),
  );
