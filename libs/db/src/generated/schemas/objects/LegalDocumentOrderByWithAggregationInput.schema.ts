import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LegalDocumentCountOrderByAggregateInputObjectSchema as LegalDocumentCountOrderByAggregateInputObjectSchema } from './LegalDocumentCountOrderByAggregateInput.schema';
import { LegalDocumentAvgOrderByAggregateInputObjectSchema as LegalDocumentAvgOrderByAggregateInputObjectSchema } from './LegalDocumentAvgOrderByAggregateInput.schema';
import { LegalDocumentMaxOrderByAggregateInputObjectSchema as LegalDocumentMaxOrderByAggregateInputObjectSchema } from './LegalDocumentMaxOrderByAggregateInput.schema';
import { LegalDocumentMinOrderByAggregateInputObjectSchema as LegalDocumentMinOrderByAggregateInputObjectSchema } from './LegalDocumentMinOrderByAggregateInput.schema';
import { LegalDocumentSumOrderByAggregateInputObjectSchema as LegalDocumentSumOrderByAggregateInputObjectSchema } from './LegalDocumentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  _count: z.lazy(() => LegalDocumentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => LegalDocumentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LegalDocumentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LegalDocumentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => LegalDocumentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LegalDocumentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LegalDocumentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentOrderByWithAggregationInput>;
export const LegalDocumentOrderByWithAggregationInputObjectZodSchema = makeSchema();
