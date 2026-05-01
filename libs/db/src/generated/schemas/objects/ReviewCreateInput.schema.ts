import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateNestedOneWithoutReviewInputObjectSchema as UserCreateNestedOneWithoutReviewInputObjectSchema } from './UserCreateNestedOneWithoutReviewInput.schema'

const makeSchema = () => z.object({
  content: z.string(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewInputObjectSchema)
}).strict();
export const ReviewCreateInputObjectSchema: z.ZodType<Prisma.ReviewCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateInput>;
export const ReviewCreateInputObjectZodSchema = makeSchema();
