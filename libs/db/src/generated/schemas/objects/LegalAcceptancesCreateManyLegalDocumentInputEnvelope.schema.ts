import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesCreateManyLegalDocumentInputObjectSchema as LegalAcceptancesCreateManyLegalDocumentInputObjectSchema } from './LegalAcceptancesCreateManyLegalDocumentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LegalAcceptancesCreateManyLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesCreateManyLegalDocumentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LegalAcceptancesCreateManyLegalDocumentInputEnvelopeObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateManyLegalDocumentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateManyLegalDocumentInputEnvelope>;
export const LegalAcceptancesCreateManyLegalDocumentInputEnvelopeObjectZodSchema = makeSchema();
