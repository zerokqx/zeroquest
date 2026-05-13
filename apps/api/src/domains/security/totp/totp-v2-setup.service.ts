import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@zeroquest/db';
import {
  MfaStateStoreService,
  MfaSetupDecorator,
  MfaSetupContext,
  MfaName,
  MfaSetupMeta,
} from '@zeroquest/nest-shared';
import { generateSecret, generateURI, verify } from 'otplib';
import { TotpEncrypt } from './totp.encrypt';
interface TotpSetup {
  iv: string;
  authTag: string;
  ua: string;
  ct: string;
  uid: string;
  ciphertext: string;
}

@MfaSetupMeta({
  for: 'totp',
})
@Injectable()
export class TotpSetupService extends MfaSetupDecorator<
  { ct: string },
  { setupId: string; uri: string },
  { value: string; setupId: string },
  boolean,
  { setupId: string },
  boolean
> {
  override name: MfaName = 'totp';

  itis() {
    console.log('[TotpSetupService] I am setup for mfa=totp');
  }

  constructor(
    private readonly prisma: PrismaService,
    private readonly mfaStateStoreService: MfaStateStoreService<TotpSetup>,
    private readonly totpEncrypt: TotpEncrypt,
  ) {
    super();
  }
  override async start(
    ctx: MfaSetupContext,
    input: { ct: string },
  ): Promise<{ setupId: string; uri: string }> {
    const user = await this.prisma.user.findUnique({
      where: { id: ctx.uid },
      select: { totpMfa: true, login: true },
    });
    if (!user) throw new NotFoundException('User not found');
    if (user.totpMfa) throw new BadRequestException('TOTP exists');
    const secret = generateSecret();
    const { authTag, ciphertext, iv } = this.totpEncrypt.encrypt(secret);
    const uri = generateURI({
      issuer: 'ZeroQuest VPN',
      label: user.login,
      secret,
    });
    const setupId = await this.mfaStateStoreService.set(
      ctx.uid,
      { ua: ctx.ua, ct: input.ct, uid: ctx.uid, ciphertext, authTag, iv },
      'totp',
      'setup',
    );
    return { setupId, uri };
  }
  override async confirm(
    ctx: MfaSetupContext,
    input: { value: string; setupId: string },
  ): Promise<boolean> {
    const setup = await this.mfaStateStoreService.get(
      ctx.uid,
      input.setupId,
      'totp',
      'setup',
    );
    if (!setup) throw new NotFoundException('Setup not found');
    const secret = this.totpEncrypt.decrypt({
      authTag: setup.authTag,
      iv: setup.iv,
      ciphertext: setup.ciphertext,
    });
    const { valid } = await verify({ secret, token: input.value });
    if (valid) {
      const data = await this.mfaStateStoreService.del(
        ctx.uid,
        input.setupId,
        'totp',
        'setup',
      );
      if (!data) throw new Error('Dellet not successed');
    }
    return valid;
  }
  override async cancel(
    ctx: MfaSetupContext,
    input: { setupId: string },
  ): Promise<boolean> {
    const setup = await this.mfaStateStoreService.exists(
      ctx.uid,
      input.setupId,
      'totp',
      'setup',
    );
    if (!setup) throw new NotFoundException('Setup not found');
    await this.mfaStateStoreService.del(
      ctx.uid,
      input.setupId,
      'totp',
      'setup',
    );
    return true;
  }
  override async canSetup(ctx: MfaSetupContext): Promise<boolean> {
    return !!(await this.prisma.totpMfa.findUnique({
      where: { userId: ctx.uid },
    }));
  }
}
