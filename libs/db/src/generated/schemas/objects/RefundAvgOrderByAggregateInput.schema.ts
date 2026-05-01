import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  paymentId: SortOrderSchema.optional()
}).strict();
export const RefundAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RefundAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundAvgOrderByAggregateInput>;
export const RefundAvgOrderByAggregateInputObjectZodSchema = makeSchema();
