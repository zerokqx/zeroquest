import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentCreateWithoutUserInputObjectSchema as PaymentCreateWithoutUserInputObjectSchema } from './PaymentCreateWithoutUserInput.schema';
import { PaymentUncheckedCreateWithoutUserInputObjectSchema as PaymentUncheckedCreateWithoutUserInputObjectSchema } from './PaymentUncheckedCreateWithoutUserInput.schema';
import { PaymentCreateOrConnectWithoutUserInputObjectSchema as PaymentCreateOrConnectWithoutUserInputObjectSchema } from './PaymentCreateOrConnectWithoutUserInput.schema';
import { PaymentUpsertWithWhereUniqueWithoutUserInputObjectSchema as PaymentUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PaymentUpsertWithWhereUniqueWithoutUserInput.schema';
import { PaymentCreateManyUserInputEnvelopeObjectSchema as PaymentCreateManyUserInputEnvelopeObjectSchema } from './PaymentCreateManyUserInputEnvelope.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithWhereUniqueWithoutUserInputObjectSchema as PaymentUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PaymentUpdateWithWhereUniqueWithoutUserInput.schema';
import { PaymentUpdateManyWithWhereWithoutUserInputObjectSchema as PaymentUpdateManyWithWhereWithoutUserInputObjectSchema } from './PaymentUpdateManyWithWhereWithoutUserInput.schema';
import { PaymentScalarWhereInputObjectSchema as PaymentScalarWhereInputObjectSchema } from './PaymentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutUserInputObjectSchema), z.lazy(() => PaymentCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PaymentCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PaymentCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PaymentUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PaymentUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PaymentCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PaymentUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PaymentUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PaymentUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => PaymentUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PaymentScalarWhereInputObjectSchema), z.lazy(() => PaymentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PaymentUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutUserNestedInput>;
export const PaymentUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
