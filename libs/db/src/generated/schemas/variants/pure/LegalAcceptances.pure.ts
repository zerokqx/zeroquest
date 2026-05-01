import * as z from 'zod';
// prettier-ignore
export const LegalAcceptancesModelSchema = z.object({
    user: z.unknown(),
    userId: z.string(),
    legalDocumentId: z.number().int(),
    legalDocument: z.unknown()
}).strict();

export type LegalAcceptancesPureType = z.infer<typeof LegalAcceptancesModelSchema>;
