import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { UserRole } from '@zeroquest/db';
import type { Response } from 'express';
import type { AuthServiceTypes } from '@zeroquest/types';
import {
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  ApiClientType,
  ApiUserAgent,
  AuthPayload,
  ReactAdminSimpleRestQueryDto,
  Role,
} from '@zeroquest/nest-shared';
import {
  extractIdsFromSimpleRestFilter,
  setSimpleRestListHeaders,
} from '@/common/lib/react-admin-simple-rest';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { SkipThrottle } from '@nestjs/throttler';

@ApiTags('User Admin')
@ApiCookieAuth('zeroquestAccess')
@Role(UserRole.ADMIN)
@Controller('admin/users')
export class UserAdminController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({ type: UserEntity, isArray: true })
  @Get()
  async getAll(
    @Query() query: ReactAdminSimpleRestQueryDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const ids = extractIdsFromSimpleRestFilter(query.filter);
    if (ids.length > 0) {
      const data = await this.userService.findManyByIds(ids);
      return data.map((user) => new UserEntity(user));
    }

    const { data, total } = await this.userService.findAll({
      skip: query.skip,
      take: query.take,
      sort: query.sortField,
      order: query.sortOrder,
    });

    setSimpleRestListHeaders({
      response: res,
      resource: 'users',
      skip: query.skip,
      dataLength: data.length,
      total,
    });

    return data.map((user) => new UserEntity(user));
  }

  @ApiOperation({
    summary: 'Проверка на админа текущего пользователя',
    description: 'Проверка',
  })
  @ApiOkResponse({ type: Boolean })
  @ApiClientType()
  @SkipThrottle()
  @ApiUserAgent()
  @Get('is-admin')
  isAdmin(@AuthPayload() payload: AuthServiceTypes.JwtPayloadSchemaType) {
    return this.userService.isAdmin(payload.sub);
  }

  @ApiOperation({
    summary: 'Получить пользователя по id',
    description: 'Возвращает пользователя по path-параметру id.',
  })
  @ApiOkResponse({ type: UserEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.userService.findById(id);
    return new UserEntity(data);
  }

  @ApiOkResponse({ type: UserEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.userService.delete(id);
    return new UserEntity(data);
  }

  @Put(':id')
  @ApiOkResponse({ type: UserEntity })
  async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    const data = await this.userService.updateUser(id, body);
    return new UserEntity(data);
  }
}
