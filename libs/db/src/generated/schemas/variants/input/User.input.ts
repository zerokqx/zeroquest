import * as z from 'zod';
import { UserRoleSchema } from '../../enums/UserRole.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    login: z.string(),
    telegramId: z.number().int().optional().nullable(),
    passwordHash: z.string(),
    subscribes: z.array(z.unknown()),
    isBanned: z.boolean(),
    role: UserRoleSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    payments: z.array(z.unknown()),
    review: z.unknown().optional().nullable(),
    canComment: z.boolean(),
    wallet: z.unknown(),
    walletId: z.string(),
    legalAcceptances: z.array(z.unknown()),
    totp: z.unknown().optional().nullable()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
