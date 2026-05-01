import * as z from 'zod';
// prettier-ignore
export const LegalAcceptancesInputSchema = z.object({
    user: z.unknown(),
    userId: z.string(),
    legalDocumentId: z.number().int(),
    legalDocument: z.unknown()
}).strict();

export type LegalAcceptancesInputType = z.infer<typeof LegalAcceptancesInputSchema>;
