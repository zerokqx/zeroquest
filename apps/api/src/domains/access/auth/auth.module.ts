import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TokenModule } from '@/domains/access/token/token.module';
import { SessionModule } from '@/domains/access/session/session.module';
import { AuthRepository } from './auth.repository';
import { PolicyModule } from '@/domains/content/policy/policy.module';
import { CookieJwtManager } from './cookie-manager.service';
import { JwtDecodePipe } from './jwt-decode.pipe';

@Module({
  imports: [TokenModule, SessionModule, PolicyModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, CookieJwtManager, JwtDecodePipe],
  exports: [TokenModule],
})
export class AuthModule {}
