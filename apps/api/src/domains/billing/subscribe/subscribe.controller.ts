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
import { User, Role } from '@zeroquest/nest-shared';
import { SubscribeBuyDto } from './dto/subscribe-buy.dto';
import { ResetSubscribeDto } from './dto/reset-subscribe.dto';
import { SubscribeEntity } from './entities/subscribe.entity';
import { Subscribe } from '@zeroquest/db';
import { SubscribeRemovePost } from './decorators/remove-post';
import { SubscribeUpdatePost } from './decorators/update-post';
import { SubscribeFindOneGet } from './decorators/find-one-get';

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
    @User() payload: AuthServiceTypes.JwtPayloadSchemaType,
  ) {
    return this.subscribeService.getLink(id, payload);
  }
  @Post()
  async buy(
    @Body() body: SubscribeBuyDto,
    @User() payload: AuthServiceTypes.JwtPayloadSchemaType,
  ) {
    return this.subscribeService.buy(body, payload);
  }

  @Post('reset')
  async resetSubscribe(
    @Body() body: ResetSubscribeDto,
    @User() payload: AuthServiceTypes.JwtPayloadSchemaType,
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
  async findAll(@User() payload: AuthServiceTypes.JwtPayloadSchemaType) {
    const data = await this.subscribeService.findAll(payload);
    return data.map((subscribe) => new SubscribeEntity(subscribe));
  }

  @SubscribeFindOneGet()
  findOne(
    @Param('id') id: string,
    @User() payload: AuthServiceTypes.JwtPayloadSchemaType,
  ) {
    return this.subscribeService.findOne(id, payload);
  }

  @SubscribeUpdatePost()
  update(
    @Param('id') id: string,
    @Body() updateSubscribeDto: UpdateSubscribeDto,
  ) {
    return this.subscribeService.update({
      where: { id },
      data: updateSubscribeDto,
    });
  }

  @SubscribeRemovePost()
  remove(
    @Param('id') id: string,
    @User() payload: AuthServiceTypes.JwtPayloadSchemaType,
  ) {
    return this.subscribeService.remove(id, payload);
  }
}
