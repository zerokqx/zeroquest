import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanCreateWithoutInboundInputObjectSchema as PlanCreateWithoutInboundInputObjectSchema } from './PlanCreateWithoutInboundInput.schema';
import { PlanUncheckedCreateWithoutInboundInputObjectSchema as PlanUncheckedCreateWithoutInboundInputObjectSchema } from './PlanUncheckedCreateWithoutInboundInput.schema';
import { PlanCreateOrConnectWithoutInboundInputObjectSchema as PlanCreateOrConnectWithoutInboundInputObjectSchema } from './PlanCreateOrConnectWithoutInboundInput.schema';
import { PlanUpsertWithWhereUniqueWithoutInboundInputObjectSchema as PlanUpsertWithWhereUniqueWithoutInboundInputObjectSchema } from './PlanUpsertWithWhereUniqueWithoutInboundInput.schema';
import { PlanCreateManyInboundInputEnvelopeObjectSchema as PlanCreateManyInboundInputEnvelopeObjectSchema } from './PlanCreateManyInboundInputEnvelope.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema';
import { PlanUpdateWithWhereUniqueWithoutInboundInputObjectSchema as PlanUpdateWithWhereUniqueWithoutInboundInputObjectSchema } from './PlanUpdateWithWhereUniqueWithoutInboundInput.schema';
import { PlanUpdateManyWithWhereWithoutInboundInputObjectSchema as PlanUpdateManyWithWhereWithoutInboundInputObjectSchema } from './PlanUpdateManyWithWhereWithoutInboundInput.schema';
import { PlanScalarWhereInputObjectSchema as PlanScalarWhereInputObjectSchema } from './PlanScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PlanCreateWithoutInboundInputObjectSchema), z.lazy(() => PlanCreateWithoutInboundInputObjectSchema).array(), z.lazy(() => PlanUncheckedCreateWithoutInboundInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutInboundInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PlanCreateOrConnectWithoutInboundInputObjectSchema), z.lazy(() => PlanCreateOrConnectWithoutInboundInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PlanUpsertWithWhereUniqueWithoutInboundInputObjectSchema), z.lazy(() => PlanUpsertWithWhereUniqueWithoutInboundInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PlanCreateManyInboundInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PlanWhereUniqueInputObjectSchema), z.lazy(() => PlanWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PlanWhereUniqueInputObjectSchema), z.lazy(() => PlanWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PlanWhereUniqueInputObjectSchema), z.lazy(() => PlanWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PlanWhereUniqueInputObjectSchema), z.lazy(() => PlanWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PlanUpdateWithWhereUniqueWithoutInboundInputObjectSchema), z.lazy(() => PlanUpdateWithWhereUniqueWithoutInboundInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PlanUpdateManyWithWhereWithoutInboundInputObjectSchema), z.lazy(() => PlanUpdateManyWithWhereWithoutInboundInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PlanScalarWhereInputObjectSchema), z.lazy(() => PlanScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PlanUncheckedUpdateManyWithoutInboundNestedInputObjectSchema: z.ZodType<Prisma.PlanUncheckedUpdateManyWithoutInboundNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUncheckedUpdateManyWithoutInboundNestedInput>;
export const PlanUncheckedUpdateManyWithoutInboundNestedInputObjectZodSchema = makeSchema();
