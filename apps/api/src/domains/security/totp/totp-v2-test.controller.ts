import { Controller, Get, Query } from '@nestjs/common';
import { MfaRegistry, Public } from '@zeroquest/nest-shared';
import { CsrfPublic } from '../csrf/csrf.decorator';
import { SkipFingerprint } from '../fingerprint/fingerprint.decorator';

@Controller('totp-v2-test')
export class TotpV2TestController {
  constructor(private readonly mfaRegistry: MfaRegistry) {}


@Public()
  @CsrfPublic()
  @SkipFingerprint()
  @Get('resolve')
  resolve(@Query('mfa') mfa: string) {
    const setup = this.mfaRegistry.resolveSetup(mfa);
    if (setup && typeof (setup as { itis?: () => void }).itis === 'function') {
      (setup as { itis: () => void }).itis();
    }

    return {
      found: !!setup,
      mfa,
      setupClass: setup?.constructor?.name ?? null,
    };
  }
}
