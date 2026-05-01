import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentCreateWithoutPlanInputObjectSchema as PaymentCreateWithoutPlanInputObjectSchema } from './PaymentCreateWithoutPlanInput.schema';
import { PaymentUncheckedCreateWithoutPlanInputObjectSchema as PaymentUncheckedCreateWithoutPlanInputObjectSchema } from './PaymentUncheckedCreateWithoutPlanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PaymentCreateWithoutPlanInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutPlanInputObjectSchema)])
}).strict();
export const PaymentCreateOrConnectWithoutPlanInputObjectSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateOrConnectWithoutPlanInput>;
export const PaymentCreateOrConnectWithoutPlanInputObjectZodSchema = makeSchema();
