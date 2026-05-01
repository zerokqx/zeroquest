import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const reviewscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ReviewScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  rating: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ReviewScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput> = reviewscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput>;
export const ReviewScalarWhereWithAggregatesInputObjectZodSchema = reviewscalarwherewithaggregatesinputSchema;
