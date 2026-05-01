import * as z from 'zod';
export const InboundGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  enable: z.boolean(),
  name: z.string(),
  inboundId: z.number().int(),
  _count: z.object({
    id: z.number(),
    enable: z.number(),
    name: z.number(),
    inboundId: z.number(),
    plans: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    inboundId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    inboundId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    inboundId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    inboundId: z.number().int().nullable()
  }).nullable().optional()
}));