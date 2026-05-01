import * as z from 'zod';
export const LegalDocumentUpsertResultSchema = z.object({
  id: z.number().int(),
  type: z.unknown(),
  version: z.date(),
  content: z.string(),
  legalAcceptances: z.array(z.unknown())
});