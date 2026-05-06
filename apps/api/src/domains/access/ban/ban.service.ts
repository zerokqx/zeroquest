import { Injectable } from '@nestjs/common';
import { PrismaService, User } from '@zeroquest/db';
import { BanCache } from './ban.cache';

@Injectable()
export class BanService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly banCache: BanCache,
  ) {}

  async isBanned(id: User['id']): Promise<boolean> {
    const cachedValue = await this.banCache.getCacheBannedValue(id);
    if (!cachedValue) {
      const data = await this.prisma.user.findUniqueOrThrow({
        select: { isBanned: true },
        where: {
          id,
        },
      });
      await this.banCache.cacheBannedValue(id, data.isBanned);
      return data.isBanned;
    }
    return cachedValue;
  }

  ban(id: User['id'], value = true) {
    return this.prisma.user.update({
      where: { id },
      data: { isBanned: value },
    });
  }
}
