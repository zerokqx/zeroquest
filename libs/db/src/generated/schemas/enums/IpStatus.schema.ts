import * as z from 'zod';

export const IpStatusSchema = z.enum(['BLOCKED', 'ACTIVE'])

export type IpStatus = z.infer<typeof IpStatusSchema>;