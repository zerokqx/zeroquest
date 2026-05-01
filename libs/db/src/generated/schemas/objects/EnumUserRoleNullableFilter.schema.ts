import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { NestedEnumUserRoleNullableFilterObjectSchema as NestedEnumUserRoleNullableFilterObjectSchema } from './NestedEnumUserRoleNullableFilter.schema'

const makeSchema = () => z.object({
  equals: UserRoleSchema.optional().nullable(),
  in: UserRoleSchema.array().optional().nullable(),
  notIn: UserRoleSchema.array().optional().nullable(),
  not: z.union([UserRoleSchema, z.lazy(() => NestedEnumUserRoleNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumUserRoleNullableFilterObjectSchema: z.ZodType<Prisma.EnumUserRoleNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserRoleNullableFilter>;
export const EnumUserRoleNullableFilterObjectZodSchema = makeSchema();
