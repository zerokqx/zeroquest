import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  userId: z.string()
}).strict();
export const LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUncheckedCreateWithoutLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUncheckedCreateWithoutLegalDocumentInput>;
export const LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectZodSchema = makeSchema();
