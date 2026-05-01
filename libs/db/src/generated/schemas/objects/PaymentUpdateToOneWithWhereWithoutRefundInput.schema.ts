import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './PaymentWhereInput.schema';
import { PaymentUpdateWithoutRefundInputObjectSchema as PaymentUpdateWithoutRefundInputObjectSchema } from './PaymentUpdateWithoutRefundInput.schema';
import { PaymentUncheckedUpdateWithoutRefundInputObjectSchema as PaymentUncheckedUpdateWithoutRefundInputObjectSchema } from './PaymentUncheckedUpdateWithoutRefundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PaymentUpdateWithoutRefundInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutRefundInputObjectSchema)])
}).strict();
export const PaymentUpdateToOneWithWhereWithoutRefundInputObjectSchema: z.ZodType<Prisma.PaymentUpdateToOneWithWhereWithoutRefundInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateToOneWithWhereWithoutRefundInput>;
export const PaymentUpdateToOneWithWhereWithoutRefundInputObjectZodSchema = makeSchema();
