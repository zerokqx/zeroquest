import * as z from 'zod';
import type { Prisma } from '../../client';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ReviewWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ReviewWhereInputObjectSchema).optional().nullable()
}).strict();
export const ReviewNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ReviewNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReviewNullableScalarRelationFilter>;
export const ReviewNullableScalarRelationFilterObjectZodSchema = makeSchema();
