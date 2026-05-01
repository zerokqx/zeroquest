import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeCreateWithoutUserInputObjectSchema as SubscribeCreateWithoutUserInputObjectSchema } from './SubscribeCreateWithoutUserInput.schema';
import { SubscribeUncheckedCreateWithoutUserInputObjectSchema as SubscribeUncheckedCreateWithoutUserInputObjectSchema } from './SubscribeUncheckedCreateWithoutUserInput.schema';
import { SubscribeCreateOrConnectWithoutUserInputObjectSchema as SubscribeCreateOrConnectWithoutUserInputObjectSchema } from './SubscribeCreateOrConnectWithoutUserInput.schema';
import { SubscribeCreateManyUserInputEnvelopeObjectSchema as SubscribeCreateManyUserInputEnvelopeObjectSchema } from './SubscribeCreateManyUserInputEnvelope.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './SubscribeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubscribeCreateWithoutUserInputObjectSchema), z.lazy(() => SubscribeCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SubscribeUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SubscribeUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubscribeCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SubscribeCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubscribeCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SubscribeWhereUniqueInputObjectSchema), z.lazy(() => SubscribeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SubscribeCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.SubscribeCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeCreateNestedManyWithoutUserInput>;
export const SubscribeCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
