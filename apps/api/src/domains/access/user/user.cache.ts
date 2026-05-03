import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { User, UserRole } from '@zeroquest/db';

type NestedKeys = keyof User;

@Injectable()
export class UserCache {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  ttl() {
    return 60;
  }
  cacheKey(userId: string, nested: NestedKeys) {
    return `${userId}:${nested}`;
  }

  cacheRole(userId: User['id'], role: UserRole) {
    const key = this.cacheKey(userId, 'role');
    return this.cacheManager.set(key, role, this.ttl());
  }


  getCacheRole(userId: User['id']){
    const key = this.cacheKey(userId,'role')
    return this.cacheManager.get<UserRole|undefined>(key)
  }
}
