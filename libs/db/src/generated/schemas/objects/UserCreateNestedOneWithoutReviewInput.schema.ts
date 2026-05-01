import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutReviewInputObjectSchema as UserCreateWithoutReviewInputObjectSchema } from './UserCreateWithoutReviewInput.schema';
import { UserUncheckedCreateWithoutReviewInputObjectSchema as UserUncheckedCreateWithoutReviewInputObjectSchema } from './UserUncheckedCreateWithoutReviewInput.schema';
import { UserCreateOrConnectWithoutReviewInputObjectSchema as UserCreateOrConnectWithoutReviewInputObjectSchema } from './UserCreateOrConnectWithoutReviewInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutReviewInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReviewInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutReviewInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutReviewInput>;
export const UserCreateNestedOneWithoutReviewInputObjectZodSchema = makeSchema();
