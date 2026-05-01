import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { NestedEnumUserRoleNullableWithAggregatesFilterObjectSchema as NestedEnumUserRoleNullableWithAggregatesFilterObjectSchema } from './NestedEnumUserRoleNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumUserRoleNullableFilterObjectSchema as NestedEnumUserRoleNullableFilterObjectSchema } from './NestedEnumUserRoleNullableFilter.schema'

const makeSchema = () => z.object({
  equals: UserRoleSchema.optional().nullable(),
  in: UserRoleSchema.array().optional().nullable(),
  notIn: UserRoleSchema.array().optional().nullable(),
  not: z.union([UserRoleSchema, z.lazy(() => NestedEnumUserRoleNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleNullableFilterObjectSchema).optional()
}).strict();
export const EnumUserRoleNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumUserRoleNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserRoleNullableWithAggregatesFilter>;
export const EnumUserRoleNullableWithAggregatesFilterObjectZodSchema = makeSchema();
