import * as z from 'zod';
export const TotpTokenAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    enabled: z.number(),
    ciphertext: z.number(),
    iv: z.number(),
    authTag: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    user: z.number(),
    userId: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    ciphertext: z.string().nullable(),
    iv: z.string().nullable(),
    authTag: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    ciphertext: z.string().nullable(),
    iv: z.string().nullable(),
    authTag: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable()
  }).nullable().optional()});