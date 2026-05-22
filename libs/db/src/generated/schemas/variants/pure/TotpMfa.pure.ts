import * as z from 'zod';
// prettier-ignore
export const TotpMfaModelSchema = z.object({
    id: z.string(),
    enabled: z.boolean(),
    ciphertext: z.string(),
    iv: z.string(),
    authTag: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    userId: z.string()
}).strict();

export type TotpMfaPureType = z.infer<typeof TotpMfaModelSchema>;
