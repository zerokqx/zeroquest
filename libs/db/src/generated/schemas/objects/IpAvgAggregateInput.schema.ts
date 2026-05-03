import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  rangeLow: z.literal(true).optional(),
  rangeHigh: z.literal(true).optional(),
  ll: z.literal(true).optional(),
  metro: z.literal(true).optional(),
  area: z.literal(true).optional()
}).strict();
export const IpAvgAggregateInputObjectSchema: z.ZodType<Prisma.IpAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.IpAvgAggregateInputType>;
export const IpAvgAggregateInputObjectZodSchema = makeSchema();
