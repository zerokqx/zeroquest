import { NextFunction, Request, Response } from 'express';
import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { IpStatus } from '@zeroquest/db';
import { IpInfoService } from './ipinfo.service';

const getIp = (req: Request) => {
  const xff = req.headers['x-forwarded-for'];
  if (xff) {
    const ips = (Array.isArray(xff) ? xff : xff.split(',')).map((ip) =>
      ip.trim(),
    );
    if (ips.length) return ips[0];
  }

  if (req.ip) return req.ip;

  throw new BadRequestException('IP is not defined');
};

@Injectable()
export class IpInfoMiddleware implements NestMiddleware {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly ipInfoService: IpInfoService,
  ) {}

  cacheKey(ip: string) {
    return `ip:${ip}:status`;
  }

  async use(req: Request, _res: Response, next: NextFunction) {
    const ip = getIp(req);
    const key = this.cacheKey(ip);
    const cachedStatus = await this.cacheManager.get<IpStatus | null>(key);
    if (!cachedStatus) {
      const ipFromDb = await this.ipInfoService.getIpDataFromDb(ip);
      if (ipFromDb) {
        await this.cacheManager.set(key, ipFromDb.status);
        if (ipFromDb.status === IpStatus.BLOCKED)
          throw new ForbiddenException();
      }
    }
    if (cachedStatus === IpStatus.BLOCKED) throw new ForbiddenException();

    next();
    return;
  }
}
