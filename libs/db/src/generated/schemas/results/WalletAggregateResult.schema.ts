import * as z from 'zod';
export const WalletAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    held: z.number(),
    balance: z.number(),
    user: z.number(),
    walletHistories: z.number()
  }).optional(),
  _sum: z.object({
    held: z.number().nullable(),
    balance: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    held: z.number().nullable(),
    balance: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    held: z.number().int().nullable(),
    balance: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    held: z.number().int().nullable(),
    balance: z.number().int().nullable()
  }).nullable().optional()});