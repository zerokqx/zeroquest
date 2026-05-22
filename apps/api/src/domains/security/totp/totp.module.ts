import { Module } from '@nestjs/common';
import { TotpService } from './totp.service';
import { TotpController } from './totp.controller';
import { CryptoService } from '@zeroquest/nest-shared';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@/config/configuration';
import { TotpJwtService } from './totp-jwt.service';
import { TotpAuthStrategy } from './totp.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      signOptions: {
        expiresIn: '5m',
      },
    }),
  ],
  providers: [
    TotpAuthStrategy,
    TotpService,
    {
      provide: CryptoService,
      useFactory(config: ConfigService<EnvironmentVariables>) {
        const key = config.getOrThrow('totp', { infer: true }).encryptionKey;
        return new CryptoService({ algorithm: 'aes-256-gcm', key });
      },
      inject: [ConfigService],
    },
  ],
  controllers: [TotpController],
  exports: [],
})
export class TotpModule {}
