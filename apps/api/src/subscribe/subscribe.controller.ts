import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';
import type { AuthServiceTypes } from '@zeroquest/types';
import {
  ApiBody,
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthPayload, Role } from '@zeroquest/nest-shared';
import { SubscribeBuyDto } from './dto/subscribe-buy.dto';

@ApiTags('Subscribe')
@ApiCookieAuth('zeroquestAccess')
@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Post('buy')
  async buy(
    @Body() body: SubscribeBuyDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.buy(body, payload);
  }

  @Post(':id/renew')
  async renew(
    @Param('id') id: string,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.renew(+id, payload);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить мои подписки',
    description: 'Возвращает список подписок текущего пользователя.',
  })
  @ApiOkResponse({
    description: 'Список подписок успешно получен.',
  })
  findAll(@AuthPayload() payload: AuthServiceTypes.JwtPayload) {
    return this.subscribeService.findAll(payload);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить подписку по id',
    description: 'Возвращает одну подписку текущего пользователя.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор подписки.',
  })
  @ApiOkResponse({
    description: 'Подписка успешно найдена.',
  })
  findOne(
    @Param('id') id: string,

    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.findOne(+id, payload);
  }

  @Role('ADMIN')
  @Patch(':id')
  @ApiOperation({
    summary: 'Обновить подписку',
    description: 'Обновляет подписку. Доступно только ADMIN.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор подписки.',
  })
  @ApiBody({
    type: UpdateSubscribeDto,
    description: 'Поля подписки для обновления.',
  })
  @ApiOkResponse({
    description: 'Подписка успешно обновлена.',
  })
  update(
    @Param('id') id: string,
    @Body() updateSubscribeDto: UpdateSubscribeDto,

    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.update(+id, payload, updateSubscribeDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Удалить подписку',
    description: 'Удаляет подписку текущего пользователя.',
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Идентификатор подписки.',
  })
  @ApiOkResponse({
    description: 'Подписка успешно удалена.',
  })
  remove(
    @Param('id') id: string,

    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.remove(+id, payload);
  }
}
