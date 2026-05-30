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
import { LocalAuthStrategy } from './local.strategy';
import { GoogleAuthStrategy } from './google/google.strategy';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { RefreshController } from './refresh/refresh.controller';
import { RefreshService } from './refresh/refresh.service';

@Module({
  imports: [
    PassportModule,
    TokenModule,
    SessionModule,
    PolicyModule,
    CsrfModule,
  ],
  controllers: [
    AuthController,
    GoogleController,
    RegisterController,
    LoginController,
    RefreshController,
  ],
  providers: [
    LoginService,
    RefreshService,
    RegisterService,
    GoogleService,
    AuthService,
    AuthRepository,
    CookieJwtManager,
    JwtDecodePipe,
    JwtAccessStrategy,
    LocalAuthStrategy,
    JwtRefreshStrategy,
    GoogleAuthStrategy,
  ],
  exports: [TokenModule],
})
export class AuthModule {}
