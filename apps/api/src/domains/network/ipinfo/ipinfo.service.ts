import geoip from 'geoip-lite';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Ip, PrismaService } from '@zeroquest/db';

@Injectable()
export class IpInfoService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly prisma: PrismaService,
  ) {}

  cacheKey(ip: string) {
    return `ip:data:${ip}`;
  }

  async lookupIp(ip: string): Promise<geoip.Lookup | null> {
    const key = this.cacheKey(ip);
    const cachedIp = await this.cacheManager.get<geoip.Lookup | null>(key);
    if (cachedIp) return cachedIp;
    const details = geoip.lookup(ip);
    this.cacheManager.set<string>(key, JSON.stringify(details), 160_000_000);
    return details;
  }

  async getIpDataFromCache(ip: string): Promise<geoip.Lookup | null> {
    const key = this.cacheKey(ip);
    const data = await this.cacheManager.get<string>(key);
    if (!data) return null;
    return JSON.parse(data) as geoip.Lookup;
  }

  async getIpDataFromDb(ip: string): Promise<Ip|null> {
    return this.prisma.ip.findUnique({ where: { ip } });
  }
}
