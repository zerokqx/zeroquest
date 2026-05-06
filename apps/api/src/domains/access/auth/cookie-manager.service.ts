import { EnvironmentVariables } from '@/config/configuration';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { COOKIE_NAME } from '@zeroquest/constants';
import type { AuthServiceTypes } from '@zeroquest/types';
import { log } from 'console';
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

  constructor(private readonly config: ConfigService<EnvironmentVariables>) {
    const app = this.config.getOrThrow('app', { infer: true });
    const jwt = this.config.getOrThrow('jwt', { infer: true });

    this.isProd = app.isProduction;
    this.accessCookieMaxAge = jwt.accessExpireTimeMs;
    this.refreshCookieMaxAge = jwt.refreshExpireTimeMs;
  }

  baseOptions(): CookieOptions {
    log(this.isProd);
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
    res.cookie(COOKIE_NAME.ACCESS, tokens.accessToken, this.accessCookie());
    res.cookie(COOKIE_NAME.REFRESH, tokens.refreshToken, this.refreshCookie());
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
    res.cookie(COOKIE_NAME.CSRF, token, this.csrfCookie());
  }
  clearAuthCookies(res: Response): void {
    res.clearCookie(COOKIE_NAME.ACCESS, this.accessCookie());
    res.clearCookie(COOKIE_NAME.REFRESH, this.refreshCookie());
    res.clearCookie(COOKIE_NAME.CSRF, this.csrfCookie());
  }
}
