import * as z from 'zod';

export const SubscribeStatusSchema = z.enum(['STOPPED', 'ACTIVE', 'PENDING'])

export type SubscribeStatus = z.infer<typeof SubscribeStatusSchema>;