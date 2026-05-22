import { EnvironmentVariables } from '@/config/configuration';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { COOKIE_NAME } from '@zeroquest/constants';
import { CookieManager } from '@zeroquest/nest-shared/cookie-manager';
import type { AuthServiceTypes } from '@zeroquest/types';
import type { CookieOptions, Request, Response } from 'express';

type JwtTokenPair = {
  accessToken: string;
  refreshToken: string;
};

@Injectable()
export class CookieJwtManager {
  private isProd: boolean;
  private readonly accessCookieMaxAge: number;
  private readonly refreshCookieMaxAge: number;
  private readonly cookieManager: CookieManager;

  constructor(private readonly config: ConfigService<EnvironmentVariables>) {
    const app = this.config.getOrThrow('app', { infer: true });
    const jwt = this.config.getOrThrow('jwt', { infer: true });

    this.isProd = app.isProduction;
    this.accessCookieMaxAge = jwt.accessExpireTimeMs;
    this.refreshCookieMaxAge = jwt.refreshExpireTimeMs;
    this.cookieManager = new CookieManager(this.baseOptions());
  }

  baseOptions(): CookieOptions {
    return {
      httpOnly: true,
      secure: this.isProd,
      sameSite: this.isProd ? 'none' : 'lax',
      path: '/',
    };
  }
  private accessCookie(): CookieOptions {
    return {
      ...this.baseOptions(),
      maxAge: this.accessCookieMaxAge,
    };
  }
  private refreshCookie(): CookieOptions {
    return {
      ...this.baseOptions(),
      maxAge: this.refreshCookieMaxAge,
    };
  }
  private csrfCookie(): CookieOptions {
    return {
      ...this.baseOptions(),
      httpOnly: false,
      maxAge: 1000 * 60 * 60,
    };
  }
  setAuthCookies(res: Response, tokens: JwtTokenPair): void {
    this.cookieManager.set(
      res,
      COOKIE_NAME.ACCESS,
      tokens.accessToken,
      this.accessCookie(),
    );
    this.cookieManager.set(
      res,
      COOKIE_NAME.REFRESH,
      tokens.refreshToken,
      this.refreshCookie(),
    );
  }

  readAuthCookies(req: Request): Partial<AuthServiceTypes.AuthCookie> {
    const cookies = req.cookies as
      | Partial<AuthServiceTypes.AuthCookie>
      | undefined;

    return {
      zeroquestAccess: cookies?.zeroquestAccess,
      zeroquestRefresh: cookies?.zeroquestRefresh,
    };
  }

  setCsrf(res: Response, token: string) {
    this.cookieManager.set(res, COOKIE_NAME.CSRF, token, this.csrfCookie());
  }
  clearAuthCookies(res: Response): void {
    this.cookieManager.clear(res, COOKIE_NAME.ACCESS, this.accessCookie());
    this.cookieManager.clear(res, COOKIE_NAME.REFRESH, this.refreshCookie());
    this.cookieManager.clear(res, COOKIE_NAME.CSRF, this.csrfCookie());
  }
}
