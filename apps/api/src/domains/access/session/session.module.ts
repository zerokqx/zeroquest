import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { TokenModule } from '@/domains/access/token/token.module';
import { SessionRepository } from './session.repository';
import { IpInfoModule } from '@/domains/network/ipinfo/ipinfo.module';

@Module({
  imports: [TokenModule, IpInfoModule],
  controllers: [SessionController],
  providers: [SessionService, SessionRepository],
  exports: [SessionService],
})
export class SessionModule {}
