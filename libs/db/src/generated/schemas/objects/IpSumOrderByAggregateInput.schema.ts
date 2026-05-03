import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  rangeLow: SortOrderSchema.optional(),
  rangeHigh: SortOrderSchema.optional(),
  ll: SortOrderSchema.optional(),
  metro: SortOrderSchema.optional(),
  area: SortOrderSchema.optional()
}).strict();
export const IpSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.IpSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.IpSumOrderByAggregateInput>;
export const IpSumOrderByAggregateInputObjectZodSchema = makeSchema();
