import { applyDecorators, Delete } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiOkResponse } from '@nestjs/swagger';

export const SubscribeRemovePost = () =>
  applyDecorators(
    Delete(':id'),
    ApiOperation({
      summary: 'Удалить подписку',
      description: 'Удаляет подписку текущего пользователя.',
    }),
    ApiParam({
      name: 'id',
      type: String,
      description: 'Идентификатор подписки.',
    }),
    ApiOkResponse({
      description: 'Подписка успешно удалена.',
    }),
  );
