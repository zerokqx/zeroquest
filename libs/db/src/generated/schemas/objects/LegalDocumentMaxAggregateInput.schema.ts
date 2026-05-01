import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  version: z.literal(true).optional(),
  content: z.literal(true).optional()
}).strict();
export const LegalDocumentMaxAggregateInputObjectSchema: z.ZodType<Prisma.LegalDocumentMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentMaxAggregateInputType>;
export const LegalDocumentMaxAggregateInputObjectZodSchema = makeSchema();
