import { Body, Controller, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { Cookies } from '@/common/guards/cookie/cookie.decorator';
import { AuthServiceTypes } from '@zeroquest/types';
import { ApiCookieAuth } from '@nestjs/swagger';
import { PatchMeDto } from './patch-me.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCookieAuth('zeroquestAccess')
  @Get('me')
  async me(
    @Cookies('zeroquestAccess' as keyof AuthServiceTypes.AuthCookie)
    access: string,
  ) {
    return this.userService.me(access);
  }

  @ApiCookieAuth('zeroquestAccess')
  @Patch('me')
  async mePatch(
    @Cookies('zeroquestAccess' as keyof AuthServiceTypes.AuthCookie)
    access: string,
    @Body() body: PatchMeDto,
  ) {
    return this.userService.patchMe(access, body);
  }
}
