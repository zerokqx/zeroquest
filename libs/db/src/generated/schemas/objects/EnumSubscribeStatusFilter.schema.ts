import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema';
import { NestedEnumSubscribeStatusFilterObjectSchema as NestedEnumSubscribeStatusFilterObjectSchema } from './NestedEnumSubscribeStatusFilter.schema'

const makeSchema = () => z.object({
  equals: SubscribeStatusSchema.optional(),
  in: SubscribeStatusSchema.array().optional(),
  notIn: SubscribeStatusSchema.array().optional(),
  not: z.union([SubscribeStatusSchema, z.lazy(() => NestedEnumSubscribeStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumSubscribeStatusFilterObjectSchema: z.ZodType<Prisma.EnumSubscribeStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSubscribeStatusFilter>;
export const EnumSubscribeStatusFilterObjectZodSchema = makeSchema();
