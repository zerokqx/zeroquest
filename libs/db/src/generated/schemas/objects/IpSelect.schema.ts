import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { IpCountOutputTypeArgsObjectSchema as IpCountOutputTypeArgsObjectSchema } from './IpCountOutputTypeArgs.schema'

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
  updatedAt: z.boolean().optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => IpCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const IpSelectObjectSchema: z.ZodType<Prisma.IpSelect> = makeSchema() as unknown as z.ZodType<Prisma.IpSelect>;
export const IpSelectObjectZodSchema = makeSchema();
