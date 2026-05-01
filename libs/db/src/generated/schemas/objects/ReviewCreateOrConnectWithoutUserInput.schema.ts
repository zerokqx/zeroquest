import * as z from 'zod';
import type { Prisma } from '../../client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutUserInputObjectSchema as ReviewCreateWithoutUserInputObjectSchema } from './ReviewCreateWithoutUserInput.schema';
import { ReviewUncheckedCreateWithoutUserInputObjectSchema as ReviewUncheckedCreateWithoutUserInputObjectSchema } from './ReviewUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutUserInput>;
export const ReviewCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
