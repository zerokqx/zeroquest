import { Body, Controller, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import type { AuthServiceTypes } from '@zeroquest/types';
import { ApiCookieAuth } from '@nestjs/swagger';
import { PatchMeDto } from './dto/patch-me.dto';
import { AuthPayload } from '@/auth/auth.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCookieAuth('zeroquestAccess')
  @Get('me')
  async me(@AuthPayload() payload: AuthServiceTypes.JwtPayload) {
    return this.userService.me(payload);
  }

  @ApiCookieAuth('zeroquestAccess')
  @Patch('me')
  async mePatch(
    @Body() body: PatchMeDto,
    @AuthPayload() payload: AuthServiceTypes.JwtPayload,
  ) {
    return this.userService.patchMe(payload, body);
  }
}
