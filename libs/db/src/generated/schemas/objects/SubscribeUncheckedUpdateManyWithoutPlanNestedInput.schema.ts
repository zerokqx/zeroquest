import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeCreateWithoutPlanInputObjectSchema as SubscribeCreateWithoutPlanInputObjectSchema } from './SubscribeCreateWithoutPlanInput.schema';
import { SubscribeUncheckedCreateWithoutPlanInputObjectSchema as SubscribeUncheckedCreateWithoutPlanInputObjectSchema } from './SubscribeUncheckedCreateWithoutPlanInput.schema';
import { SubscribeCreateOrConnectWithoutPlanInputObjectSchema as SubscribeCreateOrConnectWithoutPlanInputObjectSchema } from './SubscribeCreateOrConnectWithoutPlanInput.schema';
import { SubscribeUpsertWithWhereUniqueWithoutPlanInputObjectSchema as SubscribeUpsertWithWhereUniqueWithoutPlanInputObjectSchema } from './SubscribeUpsertWithWhereUniqueWithoutPlanInput.schema';
import { SubscribeCreateManyPlanInputEnvelopeObjectSchema as SubscribeCreateManyPlanInputEnvelopeObjectSchema } from './SubscribeCreateManyPlanInputEnvelope.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './SubscribeWhereUniqueInput.schema';
import { SubscribeUpdateWithWhereUniqueWithoutPlanInputObjectSchema as SubscribeUpdateWithWhereUniqueWithoutPlanInputObjectSchema } from './SubscribeUpdateWithWhereUniqueWithoutPlanInput.schema';
import { SubscribeUpdateManyWithWhereWithoutPlanInputObjectSchema as SubscribeUpdateManyWithWhereWithoutPlanInputObjectSchema } from './SubscribeUpdateManyWithWhereWithoutPlanInput.schema';
import { SubscribeScalarWhereInputObjectSchema as SubscribeScalarWhereInputObjectSchema } from './SubscribeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubscribeCreateWithoutPlanInputObjectSchema), z.lazy(() => SubscribeCreateWithoutPlanInputObjectSchema).array(), z.lazy(() => SubscribeUncheckedCreateWithoutPlanInputObjectSchema), z.lazy(() => SubscribeUncheckedCreateWithoutPlanInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubscribeCreateOrConnectWithoutPlanInputObjectSchema), z.lazy(() => SubscribeCreateOrConnectWithoutPlanInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SubscribeUpsertWithWhereUniqueWithoutPlanInputObjectSchema), z.lazy(() => SubscribeUpsertWithWhereUniqueWithoutPlanInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubscribeCreateManyPlanInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SubscribeWhereUniqueInputObjectSchema), z.lazy(() => SubscribeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SubscribeWhereUniqueInputObjectSchema), z.lazy(() => SubscribeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SubscribeWhereUniqueInputObjectSchema), z.lazy(() => SubscribeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SubscribeWhereUniqueInputObjectSchema), z.lazy(() => SubscribeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SubscribeUpdateWithWhereUniqueWithoutPlanInputObjectSchema), z.lazy(() => SubscribeUpdateWithWhereUniqueWithoutPlanInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SubscribeUpdateManyWithWhereWithoutPlanInputObjectSchema), z.lazy(() => SubscribeUpdateManyWithWhereWithoutPlanInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SubscribeScalarWhereInputObjectSchema), z.lazy(() => SubscribeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SubscribeUncheckedUpdateManyWithoutPlanNestedInputObjectSchema: z.ZodType<Prisma.SubscribeUncheckedUpdateManyWithoutPlanNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUncheckedUpdateManyWithoutPlanNestedInput>;
export const SubscribeUncheckedUpdateManyWithoutPlanNestedInputObjectZodSchema = makeSchema();
