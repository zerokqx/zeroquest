import * as z from 'zod';
export const ReviewDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  user: z.unknown(),
  userId: z.string(),
  content: z.string(),
  rating: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date()
}));