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
import { ResetSubscribeDto } from './dto/reset-subscribe.dto';
import { SubscribeEntity } from './entities/subscribe.entity';
import { Subscribe } from '@zeroquest/db';

@ApiTags('Subscribe')
@ApiCookieAuth('zeroquestAccess')
@Controller('subscriptions')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @ApiParam({
    name: 'id',
    type: String,
    description: 'Идентификатор подписки.',
  })
  @ApiOkResponse({ type: String })
  @Get('link/:id')
  getLink(
    @Param('id') id: Subscribe['id'],
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.getLink(id, payload);
  }
  @Post()
  async buy(
    @Body() body: SubscribeBuyDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.buy(body, payload);
  }

  @Post('reset')
  async resetSubscribe(
    @Body() body: ResetSubscribeDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.resetSubscribtion(
      body.subscribeId,
      payload.sub,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Получить мои подписки',
    description: 'Возвращает список подписок текущего пользователя.',
  })
  @ApiOkResponse({
    isArray: true,
    type: SubscribeEntity,
    description: 'Список подписок успешно получен.',
  })
  async findAll(@AuthPayload() payload: AuthServiceTypes.JwtPayload) {
    const data = await this.subscribeService.findAll(payload);
    return data.map((subscribe) => new SubscribeEntity(subscribe));
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
    type: SubscribeEntity,
    description: 'Подписка успешно найдена.',
  })
  findOne(
    @Param('id') id: string,

    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.subscribeService.findOne(id, payload);
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
    type: SubscribeEntity,
    description: 'Подписка успешно обновлена.',
  })
  update(
    @Param('id') id: string,
    @Body() updateSubscribeDto: UpdateSubscribeDto,
  ) {
    return this.subscribeService.update({
      where: { id },
      data: updateSubscribeDto,
    });
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
    @Param('id') _id: string,

    @AuthPayload() _payload: AuthServiceTypes.JwtPayload,
  ) {
    void _id;
    void _payload;
    // return this.subscribeService.remove(+id, payload);
  }
}
