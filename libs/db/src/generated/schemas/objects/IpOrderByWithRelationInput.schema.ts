import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'

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
  ll: SortOrderSchema.optional(),
  metro: SortOrderSchema.optional(),
  area: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const IpOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.IpOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.IpOrderByWithRelationInput>;
export const IpOrderByWithRelationInputObjectZodSchema = makeSchema();
