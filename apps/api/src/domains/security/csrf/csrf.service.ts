import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';


@Injectable()
export class CsrfService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  generateCsrfRedisKey(fingerprint: string) {
    return `csrf:${fingerprint}`;
  }

  generateCsrfToken() {
    return crypto.randomUUID();
  }

  async trackCsrfToken(token: string, fingerprint: string) {
    const key = this.generateCsrfRedisKey(fingerprint);
    await this.cacheManager.set(key, token, 3_600_000);
    return token;
  }

  getToken(fingerprint: string) {
    const key = this.generateCsrfRedisKey(fingerprint);
    return this.cacheManager.get(key);
  }

  deleteToken(fingerprint: string) {
    const key = this.generateCsrfRedisKey(fingerprint);
    return this.cacheManager.del(key);
  }
}
