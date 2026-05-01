import * as z from 'zod';
import { LegalDocumentTypeSchema } from '../../enums/LegalDocumentType.schema';
// prettier-ignore
export const LegalDocumentInputSchema = z.object({
    id: z.number().int(),
    type: LegalDocumentTypeSchema,
    version: z.date(),
    content: z.string(),
    legalAcceptances: z.array(z.unknown())
}).strict();

export type LegalDocumentInputType = z.infer<typeof LegalDocumentInputSchema>;
