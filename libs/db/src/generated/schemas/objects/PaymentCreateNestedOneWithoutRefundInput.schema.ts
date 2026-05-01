import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentCreateWithoutRefundInputObjectSchema as PaymentCreateWithoutRefundInputObjectSchema } from './PaymentCreateWithoutRefundInput.schema';
import { PaymentUncheckedCreateWithoutRefundInputObjectSchema as PaymentUncheckedCreateWithoutRefundInputObjectSchema } from './PaymentUncheckedCreateWithoutRefundInput.schema';
import { PaymentCreateOrConnectWithoutRefundInputObjectSchema as PaymentCreateOrConnectWithoutRefundInputObjectSchema } from './PaymentCreateOrConnectWithoutRefundInput.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutRefundInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutRefundInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PaymentCreateOrConnectWithoutRefundInputObjectSchema).optional(),
  connect: z.lazy(() => PaymentWhereUniqueInputObjectSchema).optional()
}).strict();
export const PaymentCreateNestedOneWithoutRefundInputObjectSchema: z.ZodType<Prisma.PaymentCreateNestedOneWithoutRefundInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateNestedOneWithoutRefundInput>;
export const PaymentCreateNestedOneWithoutRefundInputObjectZodSchema = makeSchema();
