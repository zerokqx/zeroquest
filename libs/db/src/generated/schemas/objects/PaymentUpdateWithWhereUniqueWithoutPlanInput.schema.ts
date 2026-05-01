import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutPlanInputObjectSchema as PaymentUpdateWithoutPlanInputObjectSchema } from './PaymentUpdateWithoutPlanInput.schema';
import { PaymentUncheckedUpdateWithoutPlanInputObjectSchema as PaymentUncheckedUpdateWithoutPlanInputObjectSchema } from './PaymentUncheckedUpdateWithoutPlanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateWithoutPlanInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutPlanInputObjectSchema)])
}).strict();
export const PaymentUpdateWithWhereUniqueWithoutPlanInputObjectSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutPlanInput>;
export const PaymentUpdateWithWhereUniqueWithoutPlanInputObjectZodSchema = makeSchema();
