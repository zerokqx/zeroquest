import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  ip: z.boolean().optional(),
  rangeLow: z.boolean().optional(),
  rangeHigh: z.boolean().optional(),
  country: z.boolean().optional(),
  region: z.boolean().optional(),
  eu: z.boolean().optional(),
  timezone: z.boolean().optional(),
  city: z.boolean().optional(),
  ll: z.boolean().optional(),
  metro: z.boolean().optional(),
  area: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const IpSelectObjectSchema: z.ZodType<Prisma.IpSelect> = makeSchema() as unknown as z.ZodType<Prisma.IpSelect>;
export const IpSelectObjectZodSchema = makeSchema();
