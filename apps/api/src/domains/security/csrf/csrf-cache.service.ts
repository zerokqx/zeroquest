import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CsrfCacheService {
  private static readonly CSRF_TTL_MS = 3_600_000;

  private csrfKey(fingerprint: string) {
    return `csrf:${fingerprint}`;
  }

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  trackCsrfToken(token: string, fingerprint: string) {
    return this.cacheManager.set(
      this.csrfKey(fingerprint),
      token,
      CsrfCacheService.CSRF_TTL_MS,
    );
  }

  getToken(fingerprint: string) {
    return this.cacheManager.get<string>(this.csrfKey(fingerprint));
  }

  deleteToken(fingerprint: string) {
    return this.cacheManager.del(this.csrfKey(fingerprint));
  }
}
