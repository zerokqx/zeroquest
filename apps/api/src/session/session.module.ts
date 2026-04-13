import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { TokenModule } from '@/token/token.module';
import { SessionRepository } from './session.repository';
import { ClientTypeModule } from '@/client-type/client-type.module';

@Module({
  imports:[TokenModule, ClientTypeModule],
  controllers: [SessionController],
  providers: [SessionService, SessionRepository],
  exports: [SessionService],
})
export class SessionModule {}
