import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { TokenModule } from '@/domains/access/token/token.module';
import { SessionCacheService } from './session-cache.service';
import { APP_GUARD } from '@nestjs/core';
import { SessionGuard } from './session.guard';

@Module({
  imports: [TokenModule],
  controllers: [SessionController],
  providers: [
    SessionService,
    SessionCacheService,
    {
      provide: APP_GUARD,
      useClass: SessionGuard,
    },
  ],
  exports: [SessionService],
})
export class SessionModule {}
