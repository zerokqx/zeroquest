import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  vlessLink: SortOrderSchema.optional(),
  vlessClientId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  nextPaymentDate: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  planId: SortOrderSchema.optional(),
  totalGb: SortOrderSchema.optional()
}).strict();
export const SubscribeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubscribeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeMinOrderByAggregateInput>;
export const SubscribeMinOrderByAggregateInputObjectZodSchema = makeSchema();
