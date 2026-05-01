import * as z from 'zod';

export const LegalDocumentTypeSchema = z.enum(['PRIVACY', 'PUBLIC', 'TERMS'])

export type LegalDocumentType = z.infer<typeof LegalDocumentTypeSchema>;