import * as z from 'zod';
// prettier-ignore
export const SessionInputSchema = z.object({
    id: z.string(),
    userAgentHash: z.string(),
    clientType: z.unknown(),
    clientTypeId: z.number().int(),
    refreshTokenJti: z.string(),
    accessTokenJti: z.string(),
    refreshTokenHash: z.string(),
    ip: z.unknown().optional().nullable(),
    expriesAt: z.date(),
    createdAt: z.date(),
    user: z.unknown(),
    userId: z.string(),
    ipId: z.number().int().optional().nullable()
}).strict();

export type SessionInputType = z.infer<typeof SessionInputSchema>;
