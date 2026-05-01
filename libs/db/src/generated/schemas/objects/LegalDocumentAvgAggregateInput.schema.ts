import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const LegalDocumentAvgAggregateInputObjectSchema: z.ZodType<Prisma.LegalDocumentAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentAvgAggregateInputType>;
export const LegalDocumentAvgAggregateInputObjectZodSchema = makeSchema();
