import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentUpdateWithoutRefundInputObjectSchema as PaymentUpdateWithoutRefundInputObjectSchema } from './PaymentUpdateWithoutRefundInput.schema';
import { PaymentUncheckedUpdateWithoutRefundInputObjectSchema as PaymentUncheckedUpdateWithoutRefundInputObjectSchema } from './PaymentUncheckedUpdateWithoutRefundInput.schema';
import { PaymentCreateWithoutRefundInputObjectSchema as PaymentCreateWithoutRefundInputObjectSchema } from './PaymentCreateWithoutRefundInput.schema';
import { PaymentUncheckedCreateWithoutRefundInputObjectSchema as PaymentUncheckedCreateWithoutRefundInputObjectSchema } from './PaymentUncheckedCreateWithoutRefundInput.schema';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './PaymentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PaymentUpdateWithoutRefundInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutRefundInputObjectSchema)]),
  create: z.union([z.lazy(() => PaymentCreateWithoutRefundInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutRefundInputObjectSchema)]),
  where: z.lazy(() => PaymentWhereInputObjectSchema).optional()
}).strict();
export const PaymentUpsertWithoutRefundInputObjectSchema: z.ZodType<Prisma.PaymentUpsertWithoutRefundInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpsertWithoutRefundInput>;
export const PaymentUpsertWithoutRefundInputObjectZodSchema = makeSchema();
