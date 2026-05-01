import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  legalDocumentId: z.literal(true).optional()
}).strict();
export const LegalAcceptancesMaxAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesMaxAggregateInputType>;
export const LegalAcceptancesMaxAggregateInputObjectZodSchema = makeSchema();
