import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentCreateWithoutUserInputObjectSchema as PaymentCreateWithoutUserInputObjectSchema } from './PaymentCreateWithoutUserInput.schema';
import { PaymentUncheckedCreateWithoutUserInputObjectSchema as PaymentUncheckedCreateWithoutUserInputObjectSchema } from './PaymentUncheckedCreateWithoutUserInput.schema';
import { PaymentCreateOrConnectWithoutUserInputObjectSchema as PaymentCreateOrConnectWithoutUserInputObjectSchema } from './PaymentCreateOrConnectWithoutUserInput.schema';
import { PaymentCreateManyUserInputEnvelopeObjectSchema as PaymentCreateManyUserInputEnvelopeObjectSchema } from './PaymentCreateManyUserInputEnvelope.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutUserInputObjectSchema), z.lazy(() => PaymentCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PaymentCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PaymentCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PaymentCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutUserInput>;
export const PaymentUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
