import { Injectable } from '@nestjs/common';
import type { AuthServiceTypes } from '@zeroquest/types';
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

  baseOptions(): CookieOptions {
    return { httpOnly: true };
  }
  setAuthCookies(res: Response, tokens: JwtTokenPair): void {
    res.cookie(this.accessCookieName, tokens.accessToken, this.baseOptions());
    res.cookie(this.refreshCookieName, tokens.refreshToken, this.baseOptions());
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
    const isProduction = process.env.NODE_ENV === 'production';
    const token = randomBytes(32).toString('hex');
    res.cookie('zeroquestCsrf', token, {
      httpOnly: false,
      secure: isProduction,
      sameSite: 'lax',
      path: '/',
      maxAge: 1000 * 60 * 60,
    });
  }
  clearAuthCookies(res: Response): void {
    res.clearCookie(this.accessCookieName, this.baseOptions());
    res.clearCookie(this.refreshCookieName, this.baseOptions());
  }
}
