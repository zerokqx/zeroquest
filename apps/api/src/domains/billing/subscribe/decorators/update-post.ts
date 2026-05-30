import { applyDecorators, Patch } from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Role } from '@zeroquest/nest-shared';
import { UpdateSubscribeDto } from '../dto/update-subscribe.dto';
import { SubscribeEntity } from '../entities/subscribe.entity';

export const SubscribeUpdatePost = () =>
  applyDecorators(
    Role('ADMIN'),
    Patch(':id'),
    ApiOperation({
      summary: 'Обновить подписку',
      description: 'Обновляет подписку. Доступно только ADMIN.',
    }),
    ApiParam({
      name: 'id',
      type: String,
      description: 'Идентификатор подписки.',
    }),
    ApiBody({
      type: UpdateSubscribeDto,
      description: 'Поля подписки для обновления.',
    }),
    ApiOkResponse({
      type: SubscribeEntity,
      description: 'Подписка успешно обновлена.',
    }),
  );



