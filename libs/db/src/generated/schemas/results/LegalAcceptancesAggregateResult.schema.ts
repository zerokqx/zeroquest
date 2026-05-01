import * as z from 'zod';
export const LegalAcceptancesAggregateResultSchema = z.object({  _count: z.object({
    user: z.number(),
    userId: z.number(),
    legalDocumentId: z.number(),
    legalDocument: z.number()
  }).optional(),
  _sum: z.object({
    legalDocumentId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    legalDocumentId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    userId: z.string().nullable(),
    legalDocumentId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    userId: z.string().nullable(),
    legalDocumentId: z.number().int().nullable()
  }).nullable().optional()});