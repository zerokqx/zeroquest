import { Module } from '@nestjs/common';
import { TotpEncrypt } from './totp.encrypt';
import { TotpService } from './totp.service';
import { TotpController } from './totp.controller';
import { TotpLoginService } from './totp-login.service';

@Module({
  providers: [TotpEncrypt, TotpService, TotpLoginService],
  controllers: [TotpController],
  exports: [TotpLoginService],
})
export class TotpModule {}
