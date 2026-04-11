import { Controller, Get, Param, Delete } from '@nestjs/common';
import { SessionService } from './session.service';
import { AuthPayload, AuthToken } from '@/auth/auth.decorator';
import type { AuthServiceTypes } from '@zeroquest/types';
import {
  ApiClientType,
  ClientType,
} from '@/common/guards/client-type/client-type.decorator';
import { TokenService } from '@/token/token.service';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get()
  findAll(@AuthPayload() user: AuthServiceTypes.JwtPayload) {
    return this.sessionService.findAll(user.sub);
  }

  @Get('current-user')
  async currentUserSession(
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.sessionService.findSessionByRefresh(payload.sub, payload.sid);
  }

  @Get(':id')
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
  async remove(
    @Param('id') id: string,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.sessionService.remove(id, payload);
  }
}
