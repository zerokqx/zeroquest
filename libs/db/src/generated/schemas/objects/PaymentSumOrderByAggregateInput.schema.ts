import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  planId: SortOrderSchema.optional()
}).strict();
export const PaymentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PaymentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentSumOrderByAggregateInput>;
export const PaymentSumOrderByAggregateInputObjectZodSchema = makeSchema();
