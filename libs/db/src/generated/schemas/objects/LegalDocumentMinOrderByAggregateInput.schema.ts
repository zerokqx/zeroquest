import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  content: SortOrderSchema.optional()
}).strict();
export const LegalDocumentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LegalDocumentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentMinOrderByAggregateInput>;
export const LegalDocumentMinOrderByAggregateInputObjectZodSchema = makeSchema();
