import { Injectable } from '@nestjs/common';
import { TotpEncrypt } from './totp.encrypt';
import { verify } from 'otplib';
import {
  MfaName,
  MfaStateStoreService,
  MfaStrategy,
  MfaStrategyDecorator,
} from '@zeroquest/nest-shared';
import { TotpDbService } from './totp-db.service';
import { TotpChallenge } from './totp.types';
import { TotpValidator } from './totp-v2.validator';

const MFA_NAME = 'totp' as const;
@MfaStrategyDecorator()
@MfaName(MFA_NAME)
@Injectable()
export class TotpStrategy implements MfaStrategy {
  constructor(
    private readonly challengeService: MfaStateStoreService<TotpChallenge>,
    private readonly totpEncrypt: TotpEncrypt,
    private readonly totpDbService: TotpDbService,
    private readonly totpValidator: TotpValidator,
  ) {}
  async confirm(_data: unknown): Promise<boolean> {
    const data = this.totpValidator.validateConfirm(_data);
    const challenge = await this.challengeService.getOrThrow(
      data.uid,
      data.challengeId,
      MFA_NAME,
      'challenge',
    );
    const totp = await this.totpDbService.get({ userId: challenge.uid });
    if (!totp) throw new Error('TOTP is not defined');
    const secret = this.totpEncrypt.decrypt(totp);
    const { valid } = await verify({ secret, token: data.value });
    if (!valid) {
      await this.challengeService.incrementAttempts(
        data.uid,
        data.challengeId,
        MFA_NAME,
        'challenge',
      );
    } else {
      await this.challengeService.del(
        data.uid,
        data.challengeId,
        MFA_NAME,
        'challenge',
      );
    }
    return valid;
  }

  async chellenge(data: TotpChallenge): Promise<string> {
    return this.challengeService.set(data.uid, data, MFA_NAME, 'challenge');
  }
  send?(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
