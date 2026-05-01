import * as z from 'zod';
// prettier-ignore
export const ReviewResultSchema = z.object({
    id: z.number().int(),
    user: z.unknown(),
    userId: z.string(),
    content: z.string(),
    rating: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ReviewResultType = z.infer<typeof ReviewResultSchema>;
