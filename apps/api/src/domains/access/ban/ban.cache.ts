import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '@zeroquest/db';

@Injectable()
export class BanCache {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  cacheKey(userId: User['id']) {
    return `user:${userId}:banned`;
  }

  cacheBannedValue(userId: User['id'], value: User['isBanned']) {
    const key = this.cacheKey(userId);
    return this.cacheManager.set(key, value);
  }

  getCacheBannedValue(userId: User['id']) {
    const key = this.cacheKey(userId);
    return this.cacheManager.get<boolean | undefined>(key);
  }

  delCacheBannedValue(userId: User['id']) {
    const key = this.cacheKey(userId);
    return this.cacheManager.del(key);
  }
}
