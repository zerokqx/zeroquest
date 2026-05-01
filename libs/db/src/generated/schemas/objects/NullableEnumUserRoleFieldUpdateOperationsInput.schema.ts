import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserRoleSchema } from '../enums/UserRole.schema'

const makeSchema = () => z.object({
  set: UserRoleSchema.optional()
}).strict();
export const NullableEnumUserRoleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumUserRoleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumUserRoleFieldUpdateOperationsInput>;
export const NullableEnumUserRoleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
