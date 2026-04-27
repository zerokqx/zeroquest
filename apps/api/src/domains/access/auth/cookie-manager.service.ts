import { EnvironmentVariables } from '@/config/configuration';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { AuthServiceTypes } from '@zeroquest/types';
import { log } from 'console';
import { randomBytes } from 'crypto';
import type { CookieOptions, Request, Response } from 'express';

type JwtTokenPair = {
  accessToken: string;
  refreshToken: string;
};

@Injectable()
export class CookieJwtManager {
  private readonly accessCookieName: keyof AuthServiceTypes.AuthCookie =
    'zeroquestAccess';
  private readonly refreshCookieName: keyof AuthServiceTypes.AuthCookie =
    'zeroquestRefresh';
  private readonly csrfCookieName: string = 'zeroquestCsrf';
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
    log(this.isProd)
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
    res.cookie(this.accessCookieName, tokens.accessToken, this.accessCookie());
    res.cookie(
      this.refreshCookieName,
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

  setCsrf(res: Response) {
    const token = randomBytes(32).toString('hex');
    res.cookie(this.csrfCookieName, token, this.csrfCookie());
  }
  clearAuthCookies(res: Response): void {
    res.clearCookie(this.accessCookieName, this.accessCookie());
    res.clearCookie(this.refreshCookieName, this.refreshCookie());
    res.clearCookie(this.csrfCookieName, this.csrfCookie());
  }
}
