import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeWhereInputObjectSchema as SubscribeWhereInputObjectSchema } from './SubscribeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SubscribeWhereInputObjectSchema).optional(),
  some: z.lazy(() => SubscribeWhereInputObjectSchema).optional(),
  none: z.lazy(() => SubscribeWhereInputObjectSchema).optional()
}).strict();
export const SubscribeListRelationFilterObjectSchema: z.ZodType<Prisma.SubscribeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeListRelationFilter>;
export const SubscribeListRelationFilterObjectZodSchema = makeSchema();
