import * as z from 'zod';
import type { Prisma } from '../../client';
import { ReviewCreateWithoutUserInputObjectSchema as ReviewCreateWithoutUserInputObjectSchema } from './ReviewCreateWithoutUserInput.schema';
import { ReviewUncheckedCreateWithoutUserInputObjectSchema as ReviewUncheckedCreateWithoutUserInputObjectSchema } from './ReviewUncheckedCreateWithoutUserInput.schema';
import { ReviewCreateOrConnectWithoutUserInputObjectSchema as ReviewCreateOrConnectWithoutUserInputObjectSchema } from './ReviewCreateOrConnectWithoutUserInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReviewUncheckedCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateNestedOneWithoutUserInput>;
export const ReviewUncheckedCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
