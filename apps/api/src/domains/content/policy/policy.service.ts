import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { LegalDocumentType, Prisma, PrismaService } from '@zeroquest/db';
import { AcceptedPolicyDto } from './dto/accepted-policy.dto';

type AcceptedPolicy = Pick<AcceptedPolicyDto, 'type' | 'version'>;

@Injectable()
export class PolicyService {
  private readonly logger = new Logger(PolicyService.name);

  constructor(private readonly prisma: PrismaService) {}

  async acceptPolicies(
    userId: string,
    policies: AcceptedPolicy[],
    options?: { tx?: Prisma.TransactionClient },
  ) {
    if (!policies?.length) {
      this.logger.warn(
        `Accept policies rejected: userId=${userId}, empty payload`,
      );
      throw new BadRequestException('Policy is not accept');
    }

    const db = options?.tx ?? this.prisma;
    const uniquePolicies = Array.from(
      new Map(policies.map((p) => [`${p.type}:${p.version}`, p])).values(),
    );
    this.logger.debug(
      `Accept policies: userId=${userId}, incoming=${policies.length}, unique=${uniquePolicies.length}`,
    );

    const docs = await db.legalDocument.findMany({
      where: {
        OR: uniquePolicies.map((p) => ({
          type: p.type,
          version: p.version,
        })),
      },
      select: { id: true },
    });

    if (docs.length !== uniquePolicies.length) {
      this.logger.warn(
        `Accept policies rejected: userId=${userId}, requested=${uniquePolicies.length}, found=${docs.length}`,
      );
      throw new BadRequestException('Invalid legal documents version or type');
    }

    await db.legalAcceptances.createMany({
      data: docs.map((doc) => ({
        userId,
        legalDocumentId: doc.id,
      })),
      skipDuplicates: true,
    });

    this.logger.log(
      `Policies accepted: userId=${userId}, documents=${docs.length}`,
    );
  }

  async acceptRequiredPolicies(
    userId: string,
    policies: AcceptedPolicy[],
    requiredTypes: LegalDocumentType[],
    options?: { tx?: Prisma.TransactionClient },
  ) {
    if (!policies?.length) {
      this.logger.warn(
        `Accept required policies rejected: userId=${userId}, empty payload`,
      );
      throw new BadRequestException('Policy is not accept');
    }
    this.logger.debug(
      `Accept required policies: userId=${userId}, required=${requiredTypes.join(',')}, incoming=${policies.length}`,
    );

    const acceptedTypes = new Set(policies.map(({ type }) => type));
    const missingTypes = requiredTypes.filter(
      (type) => !acceptedTypes.has(type),
    );

    if (missingTypes.length > 0) {
      this.logger.warn(
        `Accept required policies rejected: userId=${userId}, missing=${missingTypes.join(',')}`,
      );
      throw new BadRequestException(
        `Missing required policy types: ${missingTypes.join(', ')}`,
      );
    }

    return this.acceptPolicies(userId, policies, options);
  }

  async getActual(type: LegalDocumentType = LegalDocumentType.PRIVACY) {
    const policy = await this.prisma.legalDocument.findFirst({
      where: { type },
      orderBy: { id: 'desc' },
    });
    this.logger.debug(
      `Get actual policy: type=${type}, found=${policy ? 'yes' : 'no'}`,
    );
    return policy;
  }
}
