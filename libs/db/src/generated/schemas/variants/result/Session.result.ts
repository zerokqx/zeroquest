import * as z from 'zod';
// prettier-ignore
export const SessionResultSchema = z.object({
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
}).strict();

export type SessionResultType = z.infer<typeof SessionResultSchema>;
