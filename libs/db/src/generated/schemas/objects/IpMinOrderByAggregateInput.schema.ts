import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ip: SortOrderSchema.optional(),
  rangeLow: SortOrderSchema.optional(),
  rangeHigh: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  region: SortOrderSchema.optional(),
  eu: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  metro: SortOrderSchema.optional(),
  area: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const IpMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.IpMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.IpMinOrderByAggregateInput>;
export const IpMinOrderByAggregateInputObjectZodSchema = makeSchema();
