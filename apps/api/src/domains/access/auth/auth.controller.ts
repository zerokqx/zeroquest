import {
  Controller,
  Logger,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { type Response } from 'express';
import {
  User,
} from '@zeroquest/nest-shared';
import { CookieJwtManager } from './cookie-manager.service';
import {
  Fingerprint,
} from '@/domains/security/fingerprint/fingerprint.decorator';
import { CsrfService } from '@/domains/security/csrf/csrf.service';
import { AuthLogoutPost } from './decorators/logout-post';
import { AuthCsrfGet } from './decorators/csrf-get';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly cookieManager: CookieJwtManager,
    private readonly csrfService: CsrfService,
  ) {}

  private readonly logger = new Logger(AuthController.name);



  @AuthLogoutPost()
  async logout(
    @User() user: Express.User,
    @Res({ passthrough: true }) res: Response,
  ) {
    if (!user.jwtPayload) throw new UnauthorizedException();
    await this.authService.logout(user.jwtPayload);
    this.cookieManager.clearAuthCookies(res);
    return;
  }

  @AuthCsrfGet()
  async getCsrf(
    @Res({ passthrough: true }) res: Response,
    @Fingerprint() fingerprint: string,
  ) {
    const token = this.csrfService.generateCsrfToken();
    this.cookieManager.setCsrf(res, token);
    await this.csrfService.trackCsrfToken(token, fingerprint);
    return { ok: true };
  }

}
