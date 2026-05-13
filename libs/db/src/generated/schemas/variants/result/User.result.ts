import * as z from 'zod';
import { UserRoleSchema } from '../../enums/UserRole.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    login: z.string(),
    telegramId: z.number().int().nullable(),
    passwordHash: z.string(),
    subscribes: z.array(z.unknown()),
    isBanned: z.boolean(),
    role: UserRoleSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    payments: z.array(z.unknown()),
    review: z.unknown().nullable(),
    canComment: z.boolean(),
    wallet: z.unknown(),
    walletId: z.string(),
    legalAcceptances: z.array(z.unknown()),
    totpMfa: z.unknown().nullable()
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
