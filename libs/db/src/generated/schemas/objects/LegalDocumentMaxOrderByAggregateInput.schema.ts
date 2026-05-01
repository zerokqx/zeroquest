import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  content: SortOrderSchema.optional()
}).strict();
export const LegalDocumentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LegalDocumentMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentMaxOrderByAggregateInput>;
export const LegalDocumentMaxOrderByAggregateInputObjectZodSchema = makeSchema();
