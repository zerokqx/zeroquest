import * as z from 'zod';
// prettier-ignore
export const ClientTypeInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ClientTypeInputType = z.infer<typeof ClientTypeInputSchema>;
