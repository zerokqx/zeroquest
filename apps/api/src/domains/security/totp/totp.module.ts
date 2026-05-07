import { Module } from '@nestjs/common';
import { TotpEncrypt } from './totp.encrypt';
import { TotpService } from './totp.service';
import { TotpController } from './totp.controller';

@Module({
  providers: [TotpEncrypt, TotpService,],
  controllers: [TotpController],
})
export class TotpModule {}
