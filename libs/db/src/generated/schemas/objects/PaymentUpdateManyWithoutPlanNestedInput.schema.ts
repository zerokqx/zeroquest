import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentCreateWithoutPlanInputObjectSchema as PaymentCreateWithoutPlanInputObjectSchema } from './PaymentCreateWithoutPlanInput.schema';
import { PaymentUncheckedCreateWithoutPlanInputObjectSchema as PaymentUncheckedCreateWithoutPlanInputObjectSchema } from './PaymentUncheckedCreateWithoutPlanInput.schema';
import { PaymentCreateOrConnectWithoutPlanInputObjectSchema as PaymentCreateOrConnectWithoutPlanInputObjectSchema } from './PaymentCreateOrConnectWithoutPlanInput.schema';
import { PaymentUpsertWithWhereUniqueWithoutPlanInputObjectSchema as PaymentUpsertWithWhereUniqueWithoutPlanInputObjectSchema } from './PaymentUpsertWithWhereUniqueWithoutPlanInput.schema';
import { PaymentCreateManyPlanInputEnvelopeObjectSchema as PaymentCreateManyPlanInputEnvelopeObjectSchema } from './PaymentCreateManyPlanInputEnvelope.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithWhereUniqueWithoutPlanInputObjectSchema as PaymentUpdateWithWhereUniqueWithoutPlanInputObjectSchema } from './PaymentUpdateWithWhereUniqueWithoutPlanInput.schema';
import { PaymentUpdateManyWithWhereWithoutPlanInputObjectSchema as PaymentUpdateManyWithWhereWithoutPlanInputObjectSchema } from './PaymentUpdateManyWithWhereWithoutPlanInput.schema';
import { PaymentScalarWhereInputObjectSchema as PaymentScalarWhereInputObjectSchema } from './PaymentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutPlanInputObjectSchema), z.lazy(() => PaymentCreateWithoutPlanInputObjectSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutPlanInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutPlanInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PaymentCreateOrConnectWithoutPlanInputObjectSchema), z.lazy(() => PaymentCreateOrConnectWithoutPlanInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PaymentUpsertWithWhereUniqueWithoutPlanInputObjectSchema), z.lazy(() => PaymentUpsertWithWhereUniqueWithoutPlanInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PaymentCreateManyPlanInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PaymentUpdateWithWhereUniqueWithoutPlanInputObjectSchema), z.lazy(() => PaymentUpdateWithWhereUniqueWithoutPlanInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PaymentUpdateManyWithWhereWithoutPlanInputObjectSchema), z.lazy(() => PaymentUpdateManyWithWhereWithoutPlanInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PaymentScalarWhereInputObjectSchema), z.lazy(() => PaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PaymentUpdateManyWithoutPlanNestedInputObjectSchema: z.ZodType<Prisma.PaymentUpdateManyWithoutPlanNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateManyWithoutPlanNestedInput>;
export const PaymentUpdateManyWithoutPlanNestedInputObjectZodSchema = makeSchema();
