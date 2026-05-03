import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpStatusSchema } from '../enums/IpStatus.schema';
import { NestedEnumIpStatusWithAggregatesFilterObjectSchema as NestedEnumIpStatusWithAggregatesFilterObjectSchema } from './NestedEnumIpStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumIpStatusFilterObjectSchema as NestedEnumIpStatusFilterObjectSchema } from './NestedEnumIpStatusFilter.schema'

const makeSchema = () => z.object({
  equals: IpStatusSchema.optional(),
  in: IpStatusSchema.array().optional(),
  notIn: IpStatusSchema.array().optional(),
  not: z.union([IpStatusSchema, z.lazy(() => NestedEnumIpStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumIpStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumIpStatusFilterObjectSchema).optional()
}).strict();
export const EnumIpStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumIpStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumIpStatusWithAggregatesFilter>;
export const EnumIpStatusWithAggregatesFilterObjectZodSchema = makeSchema();
