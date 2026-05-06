import { DynamicModule, Module, Provider } from '@nestjs/common';
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
import { JwtRefreshStrategy } from './jwt-passport/jwt-refresh.strategy';
import { JwtAccessStrategy } from './jwt-passport/jwt-access.strategy';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    PassportModule,
    TokenModule,
    SessionModule,
    PolicyModule,
    CsrfModule,
  ],
  controllers: [AuthController],
  providers: [],
  exports: [TokenModule],
})
export class AuthModule {
  static register(options: { globalAuth?: boolean } = {}) {
    const providers: Provider[] = [
      AuthService,
      AuthRepository,
      CookieJwtManager,
      JwtDecodePipe,
      JwtAccessStrategy,
      JwtRefreshStrategy,
    ];
    if (options.globalAuth) {
      providers.push({
        provide: APP_GUARD,
        useClass: AuthGuard,
      });
    }
    return {
      module: AuthModule,
      imports: [PassportModule, TokenModule, SessionModule, CsrfModule],
      controllers: [AuthController],
      providers,
      exports: [TokenModule],
    };
  }
}
