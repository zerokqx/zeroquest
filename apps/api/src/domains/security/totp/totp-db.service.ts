import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService, TotpMfa } from '@zeroquest/db';
import { MfaDBTable } from '@zeroquest/nest-shared';

@Injectable()
export class TotpDbService extends MfaDBTable<
  TotpMfa,
  Prisma.TotpMfaWhereUniqueInput,
  Prisma.TotpMfaCreateInput,
  Prisma.TotpMfaUpdateInput
> {
  constructor(prisma: PrismaService) {
    super(prisma.totpMfa);
  }
}
