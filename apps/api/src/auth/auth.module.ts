import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TokenModule } from '@/token/token.module';
import { SessionModule } from '@/session/session.module';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [
    TokenModule,
    SessionModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}
