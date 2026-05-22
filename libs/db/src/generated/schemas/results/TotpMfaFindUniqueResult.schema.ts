import * as z from 'zod';
export const TotpMfaFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  enabled: z.boolean(),
  ciphertext: z.string(),
  iv: z.string(),
  authTag: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  userId: z.string()
}));