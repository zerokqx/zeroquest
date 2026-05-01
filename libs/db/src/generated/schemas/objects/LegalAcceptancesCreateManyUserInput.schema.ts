import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  legalDocumentId: z.number().int()
}).strict();
export const LegalAcceptancesCreateManyUserInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateManyUserInput>;
export const LegalAcceptancesCreateManyUserInputObjectZodSchema = makeSchema();
