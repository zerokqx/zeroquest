import { type Response } from 'express';
import { EnvironmentVariables } from '@/config/configuration';
import { ConfigService } from '@nestjs/config';
import { CookieOptions } from 'express';
import { COOKIE_NAME } from '@zeroquest/constants';
import { CookieManager } from '@zeroquest/nest-shared/cookie-manager';

const TOTP_JWT_COOKIE =
  (COOKIE_NAME as Record<string, string>).TOTP_JWT ?? 'zeroquestTotpJwt';

export class TotpCookieManager {
  private isProd!: boolean;
  private readonly cookieManager: CookieManager;

  constructor(private readonly config: ConfigService<EnvironmentVariables>) {
    const isProd = this.config.getOrThrow('app.isProduction', { infer: true });
    this.isProd = isProd;
    this.cookieManager = new CookieManager(this.settings());
  }

  settings(): CookieOptions {
    return {
      httpOnly: true,
      maxAge: 300,
      sameSite: this.isProd ? 'none' : 'lax',
      secure: this.isProd,
    };
  }

  setTotpJwt(res: Response, jwt: string) {
    this.cookieManager.set(res, TOTP_JWT_COOKIE, jwt, this.settings());
  }

  clearTotpJwt(res: Response) {
    this.cookieManager.clear(res, TOTP_JWT_COOKIE, this.settings());
  }
}
