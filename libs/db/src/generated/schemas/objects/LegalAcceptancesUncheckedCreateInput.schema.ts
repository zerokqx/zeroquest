import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  userId: z.string(),
  legalDocumentId: z.number().int()
}).strict();
export const LegalAcceptancesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUncheckedCreateInput>;
export const LegalAcceptancesUncheckedCreateInputObjectZodSchema = makeSchema();
