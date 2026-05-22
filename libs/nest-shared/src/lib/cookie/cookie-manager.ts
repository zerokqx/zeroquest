import type { CookieOptions, Response } from 'express';

export class CookieManager {
  constructor(private readonly defaults: CookieOptions = {}) {}

  private resolveOptions(options?: CookieOptions): CookieOptions {
    return {
      ...this.defaults,
      ...(options ?? {}),
    };
  }

  set(
    res: Response,
    name: string,
    value: string,
    options?: CookieOptions,
  ): void {
    res.cookie(name, value, this.resolveOptions(options));
  }

  clear(res: Response, name: string, options?: CookieOptions): void {
    res.clearCookie(name, this.resolveOptions(options));
  }
}
