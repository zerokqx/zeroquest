import * as z from 'zod';
export const TotpMfaFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  enabled: z.boolean(),
  ciphertext: z.string(),
  iv: z.string(),
  authTag: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  userId: z.string()
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