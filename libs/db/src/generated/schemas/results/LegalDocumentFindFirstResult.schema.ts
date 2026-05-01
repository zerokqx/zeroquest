import * as z from 'zod';
export const LegalDocumentFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  type: z.unknown(),
  version: z.date(),
  content: z.string(),
  legalAcceptances: z.array(z.unknown())
}));