import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ClientTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeMinOrderByAggregateInput>;
export const ClientTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
