import * as z from 'zod';

export const InboundScalarFieldEnumSchema = z.enum(['id', 'enable', 'name', 'inboundId'])

export type InboundScalarFieldEnum = z.infer<typeof InboundScalarFieldEnumSchema>;