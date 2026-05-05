import geoip from 'geoip-lite';
import { Injectable } from '@nestjs/common';
import { Ip, PrismaService } from '@zeroquest/db';
import { IpInfoCache } from './ipinfo.cache';

@Injectable()
export class IpInfoService {
  constructor(
    private readonly ipInfoCache: IpInfoCache,
    private readonly prisma: PrismaService,
  ) {}

  async lookupIp(ip: string): Promise<geoip.Lookup | null> {
    const cachedIp = await this.ipInfoCache.getCachedIp(ip);
    if (cachedIp) return cachedIp;
    const details = geoip.lookup(ip);
    this.ipInfoCache.cacheIp(ip, details);
    return details;
  }

  async getIpDataFromCache(ip: string): Promise<geoip.Lookup | null> {
    const data = await this.ipInfoCache.getCachedIp(ip);
    if (!data) return null;
    return data;
  }

  async getIpDataFromDb(ip: string): Promise<Ip | null> {
    return this.prisma.ip.findUnique({ where: { ip } });
  }
}
