import * as z from 'zod';
export const IpDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  ip: z.string(),
  rangeLow: z.number().int(),
  rangeHigh: z.number().int(),
  country: z.string(),
  region: z.string(),
  eu: z.boolean(),
  timezone: z.string(),
  city: z.string(),
  ll: z.array(z.number()),
  metro: z.number().int(),
  area: z.number().int(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  sessions: z.array(z.unknown())
}));