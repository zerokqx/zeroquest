import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  providerPaymentId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  idempotenceKey: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  confirmationUrl: SortOrderSchema.optional(),
  planId: SortOrderSchema.optional()
}).strict();
export const PaymentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PaymentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCountOrderByAggregateInput>;
export const PaymentCountOrderByAggregateInputObjectZodSchema = makeSchema();
