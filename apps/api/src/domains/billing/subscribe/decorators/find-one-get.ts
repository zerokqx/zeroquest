import { applyDecorators, Get } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiOkResponse } from '@nestjs/swagger';
import { SubscribeEntity } from '../entities/subscribe.entity';

export const SubscribeFindOneGet = () =>
  applyDecorators(
    Get(':id'),
    ApiOperation({
      summary: 'Получить подписку по id',
      description: 'Возвращает одну подписку текущего пользователя.',
    }),
    ApiParam({
      name: 'id',
      type: String,
      description: 'Идентификатор подписки.',
    }),
    ApiOkResponse({
      type: SubscribeEntity,
      description: 'Подписка успешно найдена.',
    }),
  );
