import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TotpTokenCountOrderByAggregateInputObjectSchema as TotpTokenCountOrderByAggregateInputObjectSchema } from './TotpTokenCountOrderByAggregateInput.schema';
import { TotpTokenMaxOrderByAggregateInputObjectSchema as TotpTokenMaxOrderByAggregateInputObjectSchema } from './TotpTokenMaxOrderByAggregateInput.schema';
import { TotpTokenMinOrderByAggregateInputObjectSchema as TotpTokenMinOrderByAggregateInputObjectSchema } from './TotpTokenMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  ciphertext: SortOrderSchema.optional(),
  iv: SortOrderSchema.optional(),
  authTag: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => TotpTokenCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TotpTokenMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TotpTokenMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TotpTokenOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TotpTokenOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenOrderByWithAggregationInput>;
export const TotpTokenOrderByWithAggregationInputObjectZodSchema = makeSchema();
