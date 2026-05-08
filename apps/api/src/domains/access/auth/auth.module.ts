import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TokenModule } from '@/domains/access/token/token.module';
import { SessionModule } from '@/domains/access/session/session.module';
import { AuthRepository } from './auth.repository';
import { PolicyModule } from '@/domains/content/policy/policy.module';
import { CookieJwtManager } from './cookie-manager.service';
import { JwtDecodePipe } from '@/domains/security/jwt/jwt-decode.pipe';
import { CsrfModule } from '@/domains/security/csrf/csrf.module';
import { JwtRefreshStrategy } from '../token/strategies/jwt-refresh.strategy';
import { JwtAccessStrategy } from '../token/strategies/jwt-access.strategy';
import { TotpModule } from '@/domains/security/totp/totp.module';

@Module({
  imports: [
    PassportModule,
    TokenModule,
    SessionModule,
    PolicyModule,
    CsrfModule,
    TotpModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    CookieJwtManager,
    JwtDecodePipe,
    JwtAccessStrategy,
    JwtRefreshStrategy,
  ],
  exports: [TokenModule],
})
export class AuthModule {}
