import { type Response } from 'express';
import { Headers, Res, Controller, Get } from '@nestjs/common';
import { User } from '@zeroquest/nest-shared';
import { type GoogleAuthStrategyUserType } from './google.strategy';
import { GoogleService } from './google.service';
import { CookieJwtManager } from '../cookie-manager.service';
import { GoogleAuthRedirectGet, GoogleAuthStartGet } from './google.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth/google')

@ApiTags('Auth')
export class GoogleController {
  constructor(
    private readonly googleService: GoogleService,
    private readonly cookieManager: CookieJwtManager,
  ) {}
  @GoogleAuthStartGet()
  @Get()
  googleAuth() {
    return;
  }

  @GoogleAuthRedirectGet()
  @Get('redirect')
  async googleAuthRedirect(
    @Res() res: Response,
    @User() user: GoogleAuthStrategyUserType,
    @Headers('user-agent') ua: string,
  ) {
    const result = await this.googleService.googleLogin(user.email, ua);
    this.cookieManager.setAuthCookies(res, result.data);
    return res.redirect('http://localhost:4200/dashboard');
  }
}
