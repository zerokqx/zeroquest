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
import { AuthPayload } from '@zeroquest/nest-shared';
import { UserEntity } from './entities/user.entity';
import { SkipThrottle } from '@nestjs/throttler';

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
    return this.userService.me(payload);
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
    return this.userService.patchMe(payload, body);
  }
}
