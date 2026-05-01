import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutPlanInputObjectSchema as PaymentUpdateWithoutPlanInputObjectSchema } from './PaymentUpdateWithoutPlanInput.schema';
import { PaymentUncheckedUpdateWithoutPlanInputObjectSchema as PaymentUncheckedUpdateWithoutPlanInputObjectSchema } from './PaymentUncheckedUpdateWithoutPlanInput.schema';
import { PaymentCreateWithoutPlanInputObjectSchema as PaymentCreateWithoutPlanInputObjectSchema } from './PaymentCreateWithoutPlanInput.schema';
import { PaymentUncheckedCreateWithoutPlanInputObjectSchema as PaymentUncheckedCreateWithoutPlanInputObjectSchema } from './PaymentUncheckedCreateWithoutPlanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PaymentUpdateWithoutPlanInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutPlanInputObjectSchema)]),
  create: z.union([z.lazy(() => PaymentCreateWithoutPlanInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutPlanInputObjectSchema)])
}).strict();
export const PaymentUpsertWithWhereUniqueWithoutPlanInputObjectSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutPlanInput>;
export const PaymentUpsertWithWhereUniqueWithoutPlanInputObjectZodSchema = makeSchema();
