import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutReviewInputObjectSchema as UserCreateWithoutReviewInputObjectSchema } from './UserCreateWithoutReviewInput.schema';
import { UserUncheckedCreateWithoutReviewInputObjectSchema as UserUncheckedCreateWithoutReviewInputObjectSchema } from './UserUncheckedCreateWithoutReviewInput.schema';
import { UserCreateOrConnectWithoutReviewInputObjectSchema as UserCreateOrConnectWithoutReviewInputObjectSchema } from './UserCreateOrConnectWithoutReviewInput.schema';
import { UserUpsertWithoutReviewInputObjectSchema as UserUpsertWithoutReviewInputObjectSchema } from './UserUpsertWithoutReviewInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutReviewInputObjectSchema as UserUpdateToOneWithWhereWithoutReviewInputObjectSchema } from './UserUpdateToOneWithWhereWithoutReviewInput.schema';
import { UserUpdateWithoutReviewInputObjectSchema as UserUpdateWithoutReviewInputObjectSchema } from './UserUpdateWithoutReviewInput.schema';
import { UserUncheckedUpdateWithoutReviewInputObjectSchema as UserUncheckedUpdateWithoutReviewInputObjectSchema } from './UserUncheckedUpdateWithoutReviewInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReviewInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReviewInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReviewInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutReviewInputObjectSchema), z.lazy(() => UserUpdateWithoutReviewInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReviewInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutReviewNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReviewNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutReviewNestedInput>;
export const UserUpdateOneRequiredWithoutReviewNestedInputObjectZodSchema = makeSchema();
