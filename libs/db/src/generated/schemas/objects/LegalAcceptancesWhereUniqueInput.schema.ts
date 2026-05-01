import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesUserIdLegalDocumentIdCompoundUniqueInputObjectSchema as LegalAcceptancesUserIdLegalDocumentIdCompoundUniqueInputObjectSchema } from './LegalAcceptancesUserIdLegalDocumentIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  userId_legalDocumentId: z.lazy(() => LegalAcceptancesUserIdLegalDocumentIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const LegalAcceptancesWhereUniqueInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesWhereUniqueInput>;
export const LegalAcceptancesWhereUniqueInputObjectZodSchema = makeSchema();
