import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  userId: z.string(),
  legalDocumentId: z.number().int()
}).strict();
export const LegalAcceptancesCreateManyInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateManyInput>;
export const LegalAcceptancesCreateManyInputObjectZodSchema = makeSchema();
