import { Module } from '@nestjs/common';
import { CsrfCacheService } from './csrf-cache.service';
import { CsrfService } from './csrf.service';

@Module({
  providers: [CsrfCacheService, CsrfService],
  exports: [CsrfService],
})
export class CsrfModule {}
