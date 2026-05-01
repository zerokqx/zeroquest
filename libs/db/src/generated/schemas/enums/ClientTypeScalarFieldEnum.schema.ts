import * as z from 'zod';

export const ClientTypeScalarFieldEnumSchema = z.enum(['id', 'name', 'createdAt', 'updatedAt'])

export type ClientTypeScalarFieldEnum = z.infer<typeof ClientTypeScalarFieldEnumSchema>;