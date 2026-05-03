import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  ip: z.literal(true).optional(),
  rangeLow: z.literal(true).optional(),
  rangeHigh: z.literal(true).optional(),
  country: z.literal(true).optional(),
  region: z.literal(true).optional(),
  eu: z.literal(true).optional(),
  timezone: z.literal(true).optional(),
  city: z.literal(true).optional(),
  ll: z.literal(true).optional(),
  metro: z.literal(true).optional(),
  area: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const IpCountAggregateInputObjectSchema: z.ZodType<Prisma.IpCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.IpCountAggregateInputType>;
export const IpCountAggregateInputObjectZodSchema = makeSchema();
