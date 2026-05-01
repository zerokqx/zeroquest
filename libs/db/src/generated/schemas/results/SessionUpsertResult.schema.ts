import * as z from 'zod';
export const SessionUpsertResultSchema = z.object({
  id: z.string(),
  userAgentHash: z.string(),
  clientType: z.unknown(),
  clientTypeId: z.number().int(),
  refreshTokenJti: z.string(),
  accessTokenJti: z.string(),
  refreshTokenHash: z.string(),
  createdAt: z.date(),
  user: z.unknown(),
  userId: z.string()
});