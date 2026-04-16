import { Controller, Get, Param, Delete } from '@nestjs/common';
import { SessionService } from './session.service';
import type { AuthServiceTypes } from '@zeroquest/types';
import {
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  ApiClientType,
  AuthPayload,
  AuthToken,
  ClientType,
} from '@zeroquest/nest-shared';

@ApiTags('Session')
@ApiCookieAuth('zeroquestAccess')
@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get()
  @ApiOperation({
    summary: 'Получить мои сессии',
    description: 'Возвращает список сессий текущего пользователя.',
  })
  @ApiOkResponse({
    description: 'Список сессий успешно получен.',
  })
  findAll(@AuthPayload() user: AuthServiceTypes.JwtPayload) {
    return this.sessionService.findAll(user.sub);
  }

  @Get('me')
  @ApiOperation({
    summary: 'Получить текущую сессию',
    description: 'Возвращает сессию, соответствующую текущему refresh-контексту.',
  })
  @ApiOkResponse({
    description: 'Текущая сессия успешно получена.',
  })
  async currentUserSession(
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.sessionService.findSessionByRefresh(payload.sub, payload.sid);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Получить сессию по id',
    description: 'Возвращает одну сессию текущего пользователя по идентификатору.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Идентификатор сессии.',
  })
  @ApiOkResponse({
    description: 'Сессия успешно найдена.',
  })
  async findOne(
    @Param('id') id: string,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.sessionService.findOne(id, payload.sub);
  }

  @ClientType('web')
  @Delete(':id')
  @AuthToken('refresh')
  @ApiClientType()
  @ApiCookieAuth('zeroquestRefresh')
  @ApiOperation({
    summary: 'Удалить сессию',
    description:
      'Удаляет сессию по id. Требует refresh cookie и x-client-type=web.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Идентификатор сессии.',
  })
  @ApiOkResponse({
    description: 'Сессия успешно удалена.',
  })
  @ApiUnauthorizedResponse({
    description: 'Refresh токен отсутствует, недействителен или операция запрещена.',
  })
  async remove(
    @Param('id') id: string,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.sessionService.remove(id, payload);
  }
}
