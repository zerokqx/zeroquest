import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentCreateWithoutRefundInputObjectSchema as PaymentCreateWithoutRefundInputObjectSchema } from './PaymentCreateWithoutRefundInput.schema';
import { PaymentUncheckedCreateWithoutRefundInputObjectSchema as PaymentUncheckedCreateWithoutRefundInputObjectSchema } from './PaymentUncheckedCreateWithoutRefundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PaymentCreateWithoutRefundInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutRefundInputObjectSchema)])
}).strict();
export const PaymentCreateOrConnectWithoutRefundInputObjectSchema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutRefundInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateOrConnectWithoutRefundInput>;
export const PaymentCreateOrConnectWithoutRefundInputObjectZodSchema = makeSchema();
