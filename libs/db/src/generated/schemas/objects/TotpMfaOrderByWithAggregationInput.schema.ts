import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TotpMfaCountOrderByAggregateInputObjectSchema as TotpMfaCountOrderByAggregateInputObjectSchema } from './TotpMfaCountOrderByAggregateInput.schema';
import { TotpMfaMaxOrderByAggregateInputObjectSchema as TotpMfaMaxOrderByAggregateInputObjectSchema } from './TotpMfaMaxOrderByAggregateInput.schema';
import { TotpMfaMinOrderByAggregateInputObjectSchema as TotpMfaMinOrderByAggregateInputObjectSchema } from './TotpMfaMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  ciphertext: SortOrderSchema.optional(),
  iv: SortOrderSchema.optional(),
  authTag: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  _count: z.lazy(() => TotpMfaCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TotpMfaMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TotpMfaMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TotpMfaOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TotpMfaOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaOrderByWithAggregationInput>;
export const TotpMfaOrderByWithAggregationInputObjectZodSchema = makeSchema();
