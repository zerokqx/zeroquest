import * as z from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['id', 'userId', 'content', 'rating', 'createdAt', 'updatedAt'])

export type ReviewScalarFieldEnum = z.infer<typeof ReviewScalarFieldEnumSchema>;