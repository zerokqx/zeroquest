import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@/config/configuration';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory(config: ConfigService<EnvironmentVariables>) {
        const jwt = config.getOrThrow('jwt', { infer: true });
        const secret = jwt.secret;

        if (!secret) throw new Error('JWT SECRET IS NOT DEFINED');
        return {
          global: true,
          secret,
          signOptions: {
            expiresIn: `${jwt.accessExpireTimeMs}ms`,
          },
        };
      },
    }),
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
