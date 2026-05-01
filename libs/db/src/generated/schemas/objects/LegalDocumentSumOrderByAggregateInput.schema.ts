import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const LegalDocumentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LegalDocumentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentSumOrderByAggregateInput>;
export const LegalDocumentSumOrderByAggregateInputObjectZodSchema = makeSchema();
