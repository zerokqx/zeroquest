import * as z from 'zod';
// prettier-ignore
export const ClientTypeModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ClientTypePureType = z.infer<typeof ClientTypeModelSchema>;
