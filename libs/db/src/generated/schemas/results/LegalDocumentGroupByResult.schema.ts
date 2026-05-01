import * as z from 'zod';
export const LegalDocumentGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  version: z.date(),
  content: z.string(),
  _count: z.object({
    id: z.number(),
    type: z.number(),
    version: z.number(),
    content: z.number(),
    legalAcceptances: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    version: z.date().nullable(),
    content: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    version: z.date().nullable(),
    content: z.string().nullable()
  }).nullable().optional()
}));