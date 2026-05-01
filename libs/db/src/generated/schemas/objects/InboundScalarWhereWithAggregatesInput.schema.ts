import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const inboundscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => InboundScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InboundScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InboundScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InboundScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => InboundScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  enable: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  inboundId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const InboundScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.InboundScalarWhereWithAggregatesInput> = inboundscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.InboundScalarWhereWithAggregatesInput>;
export const InboundScalarWhereWithAggregatesInputObjectZodSchema = inboundscalarwherewithaggregatesinputSchema;
