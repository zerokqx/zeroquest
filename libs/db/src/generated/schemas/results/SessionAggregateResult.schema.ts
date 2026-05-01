import * as z from 'zod';
export const SessionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userAgentHash: z.number(),
    clientType: z.number(),
    clientTypeId: z.number(),
    refreshTokenJti: z.number(),
    accessTokenJti: z.number(),
    refreshTokenHash: z.number(),
    createdAt: z.number(),
    user: z.number(),
    userId: z.number()
  }).optional(),
  _sum: z.object({
    clientTypeId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    clientTypeId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userAgentHash: z.string().nullable(),
    clientTypeId: z.number().int().nullable(),
    refreshTokenJti: z.string().nullable(),
    accessTokenJti: z.string().nullable(),
    refreshTokenHash: z.string().nullable(),
    createdAt: z.date().nullable(),
    userId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userAgentHash: z.string().nullable(),
    clientTypeId: z.number().int().nullable(),
    refreshTokenJti: z.string().nullable(),
    accessTokenJti: z.string().nullable(),
    refreshTokenHash: z.string().nullable(),
    createdAt: z.date().nullable(),
    userId: z.string().nullable()
  }).nullable().optional()});