import { EnvironmentVariables } from '@/config/configuration';
import geoip from 'geoip-lite';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IPinfoLiteWrapper } from 'node-ipinfo';

@Injectable()
export class IpInfoService {
  private readonly ipinfo!: IPinfoLiteWrapper;
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly config: ConfigService<EnvironmentVariables>,
  ) {
    const ipinfo = this.config.get('ipinfo', { infer: true });
    if (!ipinfo?.token) throw new Error('IpInfo token not found in .env');
    this.ipinfo = new IPinfoLiteWrapper(ipinfo.token);
  }

  cacheKey(ip: string) {
    return `ip:${ip}`;
  }

  async lookupIp(ip: string): Promise<geoip.Lookup | null> {
    const key = this.cacheKey(ip);
    const cachedIp = await this.cacheManager.get<geoip.Lookup | null>(key);
    if (cachedIp) return cachedIp;
    const details = geoip.lookup(ip);
    this.cacheManager.set<string>(key, JSON.stringify(details), 160_000_000);
    return details;
  }
}
