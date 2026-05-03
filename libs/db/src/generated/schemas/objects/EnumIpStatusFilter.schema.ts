import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpStatusSchema } from '../enums/IpStatus.schema';
import { NestedEnumIpStatusFilterObjectSchema as NestedEnumIpStatusFilterObjectSchema } from './NestedEnumIpStatusFilter.schema'

const makeSchema = () => z.object({
  equals: IpStatusSchema.optional(),
  in: IpStatusSchema.array().optional(),
  notIn: IpStatusSchema.array().optional(),
  not: z.union([IpStatusSchema, z.lazy(() => NestedEnumIpStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumIpStatusFilterObjectSchema: z.ZodType<Prisma.EnumIpStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumIpStatusFilter>;
export const EnumIpStatusFilterObjectZodSchema = makeSchema();
