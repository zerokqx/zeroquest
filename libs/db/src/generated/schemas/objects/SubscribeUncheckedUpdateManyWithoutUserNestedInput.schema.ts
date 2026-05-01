import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeCreateWithoutUserInputObjectSchema as SubscribeCreateWithoutUserInputObjectSchema } from './SubscribeCreateWithoutUserInput.schema';
import { SubscribeUncheckedCreateWithoutUserInputObjectSchema as SubscribeUncheckedCreateWithoutUserInputObjectSchema } from './SubscribeUncheckedCreateWithoutUserInput.schema';
import { SubscribeCreateOrConnectWithoutUserInputObjectSchema as SubscribeCreateOrConnectWithoutUserInputObjectSchema } from './SubscribeCreateOrConnectWithoutUserInput.schema';
import { SubscribeUpsertWithWhereUniqueWithoutUserInputObjectSchema as SubscribeUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './SubscribeUpsertWithWhereUniqueWithoutUserInput.schema';
import { SubscribeCreateManyUserInputEnvelopeObjectSchema as SubscribeCreateManyUserInputEnvelopeObjectSchema } from './SubscribeCreateManyUserInputEnvelope.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './SubscribeWhereUniqueInput.schema';
import { SubscribeUpdateWithWhereUniqueWithoutUserInputObjectSchema as SubscribeUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './SubscribeUpdateWithWhereUniqueWithoutUserInput.schema';
import { SubscribeUpdateManyWithWhereWithoutUserInputObjectSchema as SubscribeUpdateManyWithWhereWithoutUserInputObjectSchema } from './SubscribeUpdateManyWithWhereWithoutUserInput.schema';
import { SubscribeScalarWhereInputObjectSchema as SubscribeScalarWhereInputObjectSchema } from './SubscribeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubscribeCreateWithoutUserInputObjectSchema), z.lazy(() => SubscribeCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SubscribeUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SubscribeUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubscribeCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SubscribeCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SubscribeUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SubscribeUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubscribeCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SubscribeWhereUniqueInputObjectSchema), z.lazy(() => SubscribeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SubscribeWhereUniqueInputObjectSchema), z.lazy(() => SubscribeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SubscribeWhereUniqueInputObjectSchema), z.lazy(() => SubscribeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SubscribeWhereUniqueInputObjectSchema), z.lazy(() => SubscribeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SubscribeUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SubscribeUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SubscribeUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => SubscribeUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SubscribeScalarWhereInputObjectSchema), z.lazy(() => SubscribeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SubscribeUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.SubscribeUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUncheckedUpdateManyWithoutUserNestedInput>;
export const SubscribeUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
