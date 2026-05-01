import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutReviewInputObjectSchema as UserUpdateWithoutReviewInputObjectSchema } from './UserUpdateWithoutReviewInput.schema';
import { UserUncheckedUpdateWithoutReviewInputObjectSchema as UserUncheckedUpdateWithoutReviewInputObjectSchema } from './UserUncheckedUpdateWithoutReviewInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutReviewInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReviewInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutReviewInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReviewInput>;
export const UserUpdateToOneWithWhereWithoutReviewInputObjectZodSchema = makeSchema();
