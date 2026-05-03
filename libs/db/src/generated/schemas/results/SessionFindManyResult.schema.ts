import * as z from 'zod';
export const SessionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userAgentHash: z.string(),
  clientType: z.unknown(),
  clientTypeId: z.number().int(),
  refreshTokenJti: z.string(),
  accessTokenJti: z.string(),
  refreshTokenHash: z.string(),
  ip: z.unknown().optional(),
  expriesAt: z.date(),
  createdAt: z.date(),
  user: z.unknown(),
  userId: z.string(),
  ipId: z.number().int().optional()
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