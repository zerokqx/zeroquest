import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentScalarWhereInputObjectSchema as PaymentScalarWhereInputObjectSchema } from './PaymentScalarWhereInput.schema';
import { PaymentUpdateManyMutationInputObjectSchema as PaymentUpdateManyMutationInputObjectSchema } from './PaymentUpdateManyMutationInput.schema';
import { PaymentUncheckedUpdateManyWithoutPlanInputObjectSchema as PaymentUncheckedUpdateManyWithoutPlanInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutPlanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateManyMutationInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateManyWithoutPlanInputObjectSchema)])
}).strict();
export const PaymentUpdateManyWithWhereWithoutPlanInputObjectSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutPlanInput>;
export const PaymentUpdateManyWithWhereWithoutPlanInputObjectZodSchema = makeSchema();
