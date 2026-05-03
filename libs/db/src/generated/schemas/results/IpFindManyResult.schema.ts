import * as z from 'zod';
export const IpFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});