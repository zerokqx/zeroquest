import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  userId: z.string()
}).strict();
export const LegalAcceptancesCreateManyLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateManyLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateManyLegalDocumentInput>;
export const LegalAcceptancesCreateManyLegalDocumentInputObjectZodSchema = makeSchema();
