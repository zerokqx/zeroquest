import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  legalDocumentId: z.number().int()
}).strict();
export const LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUncheckedCreateWithoutUserInput>;
export const LegalAcceptancesUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
