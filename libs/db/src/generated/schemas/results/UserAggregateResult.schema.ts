import * as z from 'zod';
export const UserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    login: z.number(),
    telegramId: z.number(),
    passwordHash: z.number(),
    subscribes: z.number(),
    isBanned: z.number(),
    role: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    payments: z.number(),
    sessions: z.number(),
    review: z.number(),
    canComment: z.number(),
    wallet: z.number(),
    walletId: z.number(),
    legalAcceptances: z.number()
  }).optional(),
  _sum: z.object({
    telegramId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    telegramId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    login: z.string().nullable(),
    telegramId: z.number().int().nullable(),
    passwordHash: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    walletId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    login: z.string().nullable(),
    telegramId: z.number().int().nullable(),
    passwordHash: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    walletId: z.string().nullable()
  }).nullable().optional()});