import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const LegalDocumentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LegalDocumentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentAvgOrderByAggregateInput>;
export const LegalDocumentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
