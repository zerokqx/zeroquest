import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';

export class SessionCache {
  constructor(@Inject(CACHE_MANAGER) cacheManager: Cache) {}
}
