import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema'

const nestedenumsubscribestatusfilterSchema = z.object({
  equals: SubscribeStatusSchema.optional(),
  in: SubscribeStatusSchema.array().optional(),
  notIn: SubscribeStatusSchema.array().optional(),
  not: z.union([SubscribeStatusSchema, z.lazy(() => NestedEnumSubscribeStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSubscribeStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumSubscribeStatusFilter> = nestedenumsubscribestatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSubscribeStatusFilter>;
export const NestedEnumSubscribeStatusFilterObjectZodSchema = nestedenumsubscribestatusfilterSchema;
