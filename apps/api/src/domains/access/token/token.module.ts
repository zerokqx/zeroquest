import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@/config/configuration';
import { log } from 'console';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService<EnvironmentVariables>) {
        const secret = config.getOrThrow('jwt', { infer: true }).secret;
        log(secret)
        if (!secret) throw new Error('JWT SECRET IS NOT DEFINED');
        return {
          global: true,
          secret,
          signOptions: { expiresIn: '30m' },
        };
      },
    }),
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
