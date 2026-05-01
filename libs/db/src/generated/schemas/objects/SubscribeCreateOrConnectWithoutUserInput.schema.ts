import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './SubscribeWhereUniqueInput.schema';
import { SubscribeCreateWithoutUserInputObjectSchema as SubscribeCreateWithoutUserInputObjectSchema } from './SubscribeCreateWithoutUserInput.schema';
import { SubscribeUncheckedCreateWithoutUserInputObjectSchema as SubscribeUncheckedCreateWithoutUserInputObjectSchema } from './SubscribeUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscribeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SubscribeCreateWithoutUserInputObjectSchema), z.lazy(() => SubscribeUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SubscribeCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.SubscribeCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeCreateOrConnectWithoutUserInput>;
export const SubscribeCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
