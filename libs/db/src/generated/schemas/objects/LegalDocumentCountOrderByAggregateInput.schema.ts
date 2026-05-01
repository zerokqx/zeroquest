import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  content: SortOrderSchema.optional()
}).strict();
export const LegalDocumentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LegalDocumentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentCountOrderByAggregateInput>;
export const LegalDocumentCountOrderByAggregateInputObjectZodSchema = makeSchema();
