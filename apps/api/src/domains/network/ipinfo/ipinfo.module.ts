import { Module } from '@nestjs/common';
import { IpInfoService } from './ipinfo.service';

@Module({
  providers: [IpInfoService],
  exports: [IpInfoService],
})
export class IpInfoModule {}
