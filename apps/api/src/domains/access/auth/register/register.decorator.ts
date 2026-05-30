
import { applyDecorators, Post } from '@nestjs/common';
import {
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { Public, ApiClientType, ClientType } from '@zeroquest/nest-shared';
import { RegisterDto } from './register.dto';

export const ApiAuthRegister = () =>
  applyDecorators(
    ApiOperation({
      summary: 'Регистрация пользователя',
      description:
        'Создаёт нового пользователя. Токены не выдаются: после регистрации требуется отдельный вход.',
    }),
    ApiClientType(),
    ApiConsumes('application/json'),
    ApiBody({
      type: RegisterDto,
      description: 'Данные для регистрации',
    }),
    ApiCreatedResponse({
      description: 'Пользователь успешно зарегистрирован.',
      schema: {
        example: {
          message: 'Пользователь успешно зарегистрирован',
        },
      },
    }),
    ApiBadRequestResponse({
      description: 'Некорректные данные или пользователь уже существует',
    }),
    ApiForbiddenResponse({
      description: 'Указан неподдерживаемый client type.',
    }),
  );

export const AuthRegisterPost = () =>
  applyDecorators(
    ClientType('web'),
    Public(),
    ApiAuthRegister(),
  );
