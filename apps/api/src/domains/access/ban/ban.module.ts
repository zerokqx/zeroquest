import { Module } from '@nestjs/common';
import { BanGuard } from './ban.guard';
import { BanCache } from './ban.cache';
import { BanService } from './ban.service';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [
    BanCache,
    BanService,

    {
      provide: APP_GUARD,
      useClass: BanGuard,
    },
  ],
})
export class BanModule {}
