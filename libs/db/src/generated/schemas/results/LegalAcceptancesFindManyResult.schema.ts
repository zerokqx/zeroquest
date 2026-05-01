import * as z from 'zod';
export const LegalAcceptancesFindManyResultSchema = z.object({
  data: z.array(z.object({
  user: z.unknown(),
  userId: z.string(),
  legalDocumentId: z.number().int(),
  legalDocument: z.unknown()
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