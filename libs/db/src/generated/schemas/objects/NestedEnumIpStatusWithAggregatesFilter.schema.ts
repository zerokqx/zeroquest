import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpStatusSchema } from '../enums/IpStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumIpStatusFilterObjectSchema as NestedEnumIpStatusFilterObjectSchema } from './NestedEnumIpStatusFilter.schema'

const nestedenumipstatuswithaggregatesfilterSchema = z.object({
  equals: IpStatusSchema.optional(),
  in: IpStatusSchema.array().optional(),
  notIn: IpStatusSchema.array().optional(),
  not: z.union([IpStatusSchema, z.lazy(() => NestedEnumIpStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumIpStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumIpStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumIpStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumIpStatusWithAggregatesFilter> = nestedenumipstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumIpStatusWithAggregatesFilter>;
export const NestedEnumIpStatusWithAggregatesFilterObjectZodSchema = nestedenumipstatuswithaggregatesfilterSchema;
