import * as z from 'zod';
import { LegalDocumentTypeSchema } from '../../enums/LegalDocumentType.schema';
// prettier-ignore
export const LegalDocumentResultSchema = z.object({
    id: z.number().int(),
    type: LegalDocumentTypeSchema,
    version: z.date(),
    content: z.string(),
    legalAcceptances: z.array(z.unknown())
}).strict();

export type LegalDocumentResultType = z.infer<typeof LegalDocumentResultSchema>;
