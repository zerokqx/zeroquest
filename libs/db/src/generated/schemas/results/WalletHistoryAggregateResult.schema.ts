import * as z from 'zod';
export const WalletHistoryAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    amount: z.number(),
    balance: z.number(),
    type: z.number(),
    createdAt: z.number(),
    walletId: z.number(),
    wallet: z.number()
  }).optional(),
  _sum: z.object({
    amount: z.number().nullable(),
    balance: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amount: z.number().nullable(),
    balance: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    amount: z.number().int().nullable(),
    balance: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    walletId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    amount: z.number().int().nullable(),
    balance: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    walletId: z.string().nullable()
  }).nullable().optional()});