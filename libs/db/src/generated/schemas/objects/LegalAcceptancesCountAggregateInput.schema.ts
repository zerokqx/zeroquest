import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  legalDocumentId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LegalAcceptancesCountAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCountAggregateInputType>;
export const LegalAcceptancesCountAggregateInputObjectZodSchema = makeSchema();
