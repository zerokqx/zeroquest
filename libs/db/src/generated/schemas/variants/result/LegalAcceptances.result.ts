import * as z from 'zod';
// prettier-ignore
export const LegalAcceptancesResultSchema = z.object({
    user: z.unknown(),
    userId: z.string(),
    legalDocumentId: z.number().int(),
    legalDocument: z.unknown()
}).strict();

export type LegalAcceptancesResultType = z.infer<typeof LegalAcceptancesResultSchema>;
