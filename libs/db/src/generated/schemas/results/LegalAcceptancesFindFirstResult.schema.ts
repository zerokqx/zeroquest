import * as z from 'zod';
export const LegalAcceptancesFindFirstResultSchema = z.nullable(z.object({
  user: z.unknown(),
  userId: z.string(),
  legalDocumentId: z.number().int(),
  legalDocument: z.unknown()
}));