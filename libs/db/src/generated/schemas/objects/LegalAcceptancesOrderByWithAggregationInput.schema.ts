import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LegalAcceptancesCountOrderByAggregateInputObjectSchema as LegalAcceptancesCountOrderByAggregateInputObjectSchema } from './LegalAcceptancesCountOrderByAggregateInput.schema';
import { LegalAcceptancesAvgOrderByAggregateInputObjectSchema as LegalAcceptancesAvgOrderByAggregateInputObjectSchema } from './LegalAcceptancesAvgOrderByAggregateInput.schema';
import { LegalAcceptancesMaxOrderByAggregateInputObjectSchema as LegalAcceptancesMaxOrderByAggregateInputObjectSchema } from './LegalAcceptancesMaxOrderByAggregateInput.schema';
import { LegalAcceptancesMinOrderByAggregateInputObjectSchema as LegalAcceptancesMinOrderByAggregateInputObjectSchema } from './LegalAcceptancesMinOrderByAggregateInput.schema';
import { LegalAcceptancesSumOrderByAggregateInputObjectSchema as LegalAcceptancesSumOrderByAggregateInputObjectSchema } from './LegalAcceptancesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  legalDocumentId: SortOrderSchema.optional(),
  _count: z.lazy(() => LegalAcceptancesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => LegalAcceptancesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LegalAcceptancesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LegalAcceptancesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => LegalAcceptancesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LegalAcceptancesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesOrderByWithAggregationInput>;
export const LegalAcceptancesOrderByWithAggregationInputObjectZodSchema = makeSchema();
