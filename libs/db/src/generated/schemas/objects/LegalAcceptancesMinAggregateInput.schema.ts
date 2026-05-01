import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  legalDocumentId: z.literal(true).optional()
}).strict();
export const LegalAcceptancesMinAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesMinAggregateInputType>;
export const LegalAcceptancesMinAggregateInputObjectZodSchema = makeSchema();
