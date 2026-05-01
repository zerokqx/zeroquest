import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  legalDocumentId: z.literal(true).optional()
}).strict();
export const LegalAcceptancesSumAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesSumAggregateInputType>;
export const LegalAcceptancesSumAggregateInputObjectZodSchema = makeSchema();
