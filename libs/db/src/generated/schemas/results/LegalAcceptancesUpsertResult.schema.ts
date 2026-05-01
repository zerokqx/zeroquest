import * as z from 'zod';
export const LegalAcceptancesUpsertResultSchema = z.object({
  user: z.unknown(),
  userId: z.string(),
  legalDocumentId: z.number().int(),
  legalDocument: z.unknown()
});