import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpStatusSchema } from '../enums/IpStatus.schema'

const nestedenumipstatusfilterSchema = z.object({
  equals: IpStatusSchema.optional(),
  in: IpStatusSchema.array().optional(),
  notIn: IpStatusSchema.array().optional(),
  not: z.union([IpStatusSchema, z.lazy(() => NestedEnumIpStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumIpStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumIpStatusFilter> = nestedenumipstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumIpStatusFilter>;
export const NestedEnumIpStatusFilterObjectZodSchema = nestedenumipstatusfilterSchema;
