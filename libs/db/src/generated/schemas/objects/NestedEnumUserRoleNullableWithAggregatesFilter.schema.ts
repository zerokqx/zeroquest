import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumUserRoleNullableFilterObjectSchema as NestedEnumUserRoleNullableFilterObjectSchema } from './NestedEnumUserRoleNullableFilter.schema'

const nestedenumuserrolenullablewithaggregatesfilterSchema = z.object({
  equals: UserRoleSchema.optional().nullable(),
  in: UserRoleSchema.array().optional().nullable(),
  notIn: UserRoleSchema.array().optional().nullable(),
  not: z.union([UserRoleSchema, z.lazy(() => NestedEnumUserRoleNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumUserRoleNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserRoleNullableWithAggregatesFilter> = nestedenumuserrolenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumUserRoleNullableWithAggregatesFilter>;
export const NestedEnumUserRoleNullableWithAggregatesFilterObjectZodSchema = nestedenumuserrolenullablewithaggregatesfilterSchema;
