import * as z from 'zod';
// prettier-ignore
export const ReviewModelSchema = z.object({
    id: z.number().int(),
    user: z.unknown(),
    userId: z.string(),
    content: z.string(),
    rating: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ReviewPureType = z.infer<typeof ReviewModelSchema>;
