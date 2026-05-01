import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  legalDocumentId: z.literal(true).optional()
}).strict();
export const LegalAcceptancesAvgAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesAvgAggregateInputType>;
export const LegalAcceptancesAvgAggregateInputObjectZodSchema = makeSchema();
