import * as z from 'zod';
// prettier-ignore
export const ClientTypeResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    sessions: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ClientTypeResultType = z.infer<typeof ClientTypeResultSchema>;
