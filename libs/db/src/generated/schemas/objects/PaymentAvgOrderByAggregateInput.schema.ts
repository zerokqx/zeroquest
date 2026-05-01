import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  planId: SortOrderSchema.optional()
}).strict();
export const PaymentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PaymentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentAvgOrderByAggregateInput>;
export const PaymentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
