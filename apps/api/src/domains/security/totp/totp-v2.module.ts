import { Module } from '@nestjs/common';
import { TotpStrategy } from './totp-v2.service';
import { TotpSetupService } from './totp-v2-setup.service';
import { TotpEncrypt } from './totp.encrypt';
import { TotpDbService } from './totp-db.service';
import { TotpV2TestController } from './totp-v2-test.controller';

@Module({
  controllers: [TotpV2TestController],
  providers: [TotpStrategy, TotpSetupService, TotpEncrypt, TotpDbService],
  exports: [TotpStrategy, TotpSetupService],
})
export class TotpMethodModule {}
