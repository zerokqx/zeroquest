import { Body, Controller, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import type { AuthServiceTypes } from '@zeroquest/types';
import {
  ApiBody,
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PatchMeDto } from './dto/patch-me.dto';
import { ApiClientType, ApiUserAgent, AuthPayload, Role } from '@zeroquest/nest-shared';
import { UserEntity } from './entities/user.entity';
import { SkipThrottle } from '@nestjs/throttler';
import { UserRole } from '@zeroquest/db';

@ApiTags('User')
@ApiCookieAuth('zeroquestAccess')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @SkipThrottle()
  @Get('me')
  @ApiOperation({
    summary: 'Получить мой профиль',
    description: 'Возвращает профиль текущего пользователя.',
  })
  @ApiOkResponse({
    type: UserEntity,
    description: 'Профиль успешно получен.',
  })
  async me(@AuthPayload() payload: AuthServiceTypes.JwtPayload) {
    const data = await this.userService.me(payload);

    return new UserEntity(data);
  }

  @Patch('me')
  @ApiOperation({
    summary: 'Обновить мой профиль',
    description: 'Обновляет профиль текущего пользователя.',
  })
  @ApiBody({
    type: PatchMeDto,
    description: 'Поля профиля для обновления.',
  })
  @ApiOkResponse({
    type: UserEntity,
    description: 'Профиль успешно обновлён.',
  })
  async mePatch(
    @Body() body: PatchMeDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    const data = await this.userService.patchMe(payload, body);

    return new UserEntity(data);
  }

  @ApiOperation({
    summary: 'Проверка на админа текущего пользователя',
    description: 'Проверка',
  })
  @ApiClientType()
  @ApiUserAgent()
  @Get('is-admin')
  @Role(UserRole.ADMIN)
  isAdmin(@AuthPayload() payload: AuthServiceTypes.JwtPayload) {
    return this.userService.isAdmin(payload.sub);
  }
}
