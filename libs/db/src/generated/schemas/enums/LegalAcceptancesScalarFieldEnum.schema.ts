import * as z from 'zod';

export const LegalAcceptancesScalarFieldEnumSchema = z.enum(['userId', 'legalDocumentId'])

export type LegalAcceptancesScalarFieldEnum = z.infer<typeof LegalAcceptancesScalarFieldEnumSchema>;