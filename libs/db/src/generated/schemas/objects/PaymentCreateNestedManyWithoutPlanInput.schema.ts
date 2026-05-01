import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentCreateWithoutPlanInputObjectSchema as PaymentCreateWithoutPlanInputObjectSchema } from './PaymentCreateWithoutPlanInput.schema';
import { PaymentUncheckedCreateWithoutPlanInputObjectSchema as PaymentUncheckedCreateWithoutPlanInputObjectSchema } from './PaymentUncheckedCreateWithoutPlanInput.schema';
import { PaymentCreateOrConnectWithoutPlanInputObjectSchema as PaymentCreateOrConnectWithoutPlanInputObjectSchema } from './PaymentCreateOrConnectWithoutPlanInput.schema';
import { PaymentCreateManyPlanInputEnvelopeObjectSchema as PaymentCreateManyPlanInputEnvelopeObjectSchema } from './PaymentCreateManyPlanInputEnvelope.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutPlanInputObjectSchema), z.lazy(() => PaymentCreateWithoutPlanInputObjectSchema).array(), z.lazy(() => PaymentUncheckedCreateWithoutPlanInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutPlanInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PaymentCreateOrConnectWithoutPlanInputObjectSchema), z.lazy(() => PaymentCreateOrConnectWithoutPlanInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PaymentCreateManyPlanInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PaymentCreateNestedManyWithoutPlanInputObjectSchema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateNestedManyWithoutPlanInput>;
export const PaymentCreateNestedManyWithoutPlanInputObjectZodSchema = makeSchema();
