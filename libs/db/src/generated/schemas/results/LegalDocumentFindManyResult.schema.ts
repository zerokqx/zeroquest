import * as z from 'zod';
export const LegalDocumentFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  type: z.unknown(),
  version: z.date(),
  content: z.string(),
  legalAcceptances: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});