import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  ciphertext: SortOrderSchema.optional(),
  iv: SortOrderSchema.optional(),
  authTag: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const TotpTokenMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TotpTokenMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenMinOrderByAggregateInput>;
export const TotpTokenMinOrderByAggregateInputObjectZodSchema = makeSchema();
