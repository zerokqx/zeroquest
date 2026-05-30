import { type Response } from 'express';
import { EnvelopeDto } from '@/common/swagger/envelope';
import { Fingerprint } from '@/domains/security/fingerprint/fingerprint.decorator';
import { Body, Res, Headers, Controller, Post } from '@nestjs/common';
import { RESPONSE_CODES } from '@zeroquest/constants';
import { AuthPasswordPost } from './login.decorator';
import { LoginDto } from './login.dto';
import { CookieJwtManager } from '../cookie-manager.service';
import { CsrfService } from '@/domains/security/csrf/csrf.service';
import { LoginService } from './login.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')

@ApiTags('Auth')
export class LoginController {
  constructor(
    private readonly csrfService: CsrfService,
    private readonly cookieManager: CookieJwtManager,
    private readonly loginService: LoginService,
  ) {}

  @AuthPasswordPost()
  @Post('password')
  async password(
    @Body() body: LoginDto,
    @Headers('user-agent') ua: string,
    @Fingerprint() fingerprint: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.loginService.password(body, ua);

    this.cookieManager.setAuthCookies(res, result.data);
    const csrf = this.csrfService.generateCsrfToken();
    this.cookieManager.setCsrf(res, csrf);
    await this.csrfService.trackCsrfToken(csrf, fingerprint);
    return new EnvelopeDto({ type: RESPONSE_CODES.AUTHENTICATED });
  }
}
