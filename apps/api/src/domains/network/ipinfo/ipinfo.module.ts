import { Module } from '@nestjs/common';
import { IpInfoService } from './ipinfo.service';
import { IpInfoCache } from './ipinfo.cache';

@Module({
  providers: [IpInfoService, IpInfoCache],
  exports: [IpInfoService],
})
export class IpInfoModule {}
