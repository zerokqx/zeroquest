import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Ip } from '@zeroquest/db';
import geoip from 'geoip-lite';
import {
  IPSchema,
  LookupSchema,
  LookupSchemaType,
} from './dto/schemas/lookup.schema';

type NestedKeys = keyof Ip | 'content';
@Injectable()
export class IpInfoCache {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
  cacheKey(ip: string, nested: NestedKeys) {
    return `ip:${ip}:${nested}`;
  }
  async cacheIp(ip: string, value: LookupSchemaType | null) {
    const [lookup, parsedIp] = await Promise.all([
      LookupSchema.safeParseAsync(value),
      IPSchema.safeParseAsync(ip),
    ]);
    if (lookup.error || parsedIp.error) return null;
    return this.cacheManager.set(this.cacheKey(ip, 'content'), value);
  }

  async getCachedIp(ip: string) {
    const { data, error } = await IPSchema.safeParseAsync(ip);
    if (error) return null;
    return (
      this.cacheManager.get<geoip.Lookup>(this.cacheKey(data, 'content')) ??
      null
    );
  }
}
