import * as z from 'zod';

export const LegalDocumentScalarFieldEnumSchema = z.enum(['id', 'type', 'version', 'content'])

export type LegalDocumentScalarFieldEnum = z.infer<typeof LegalDocumentScalarFieldEnumSchema>;