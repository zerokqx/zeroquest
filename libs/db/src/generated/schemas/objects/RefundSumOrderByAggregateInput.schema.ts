import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  paymentId: SortOrderSchema.optional()
}).strict();
export const RefundSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RefundSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundSumOrderByAggregateInput>;
export const RefundSumOrderByAggregateInputObjectZodSchema = makeSchema();
