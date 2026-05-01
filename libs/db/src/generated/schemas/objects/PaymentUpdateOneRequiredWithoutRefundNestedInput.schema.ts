import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentCreateWithoutRefundInputObjectSchema as PaymentCreateWithoutRefundInputObjectSchema } from './PaymentCreateWithoutRefundInput.schema';
import { PaymentUncheckedCreateWithoutRefundInputObjectSchema as PaymentUncheckedCreateWithoutRefundInputObjectSchema } from './PaymentUncheckedCreateWithoutRefundInput.schema';
import { PaymentCreateOrConnectWithoutRefundInputObjectSchema as PaymentCreateOrConnectWithoutRefundInputObjectSchema } from './PaymentCreateOrConnectWithoutRefundInput.schema';
import { PaymentUpsertWithoutRefundInputObjectSchema as PaymentUpsertWithoutRefundInputObjectSchema } from './PaymentUpsertWithoutRefundInput.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateToOneWithWhereWithoutRefundInputObjectSchema as PaymentUpdateToOneWithWhereWithoutRefundInputObjectSchema } from './PaymentUpdateToOneWithWhereWithoutRefundInput.schema';
import { PaymentUpdateWithoutRefundInputObjectSchema as PaymentUpdateWithoutRefundInputObjectSchema } from './PaymentUpdateWithoutRefundInput.schema';
import { PaymentUncheckedUpdateWithoutRefundInputObjectSchema as PaymentUncheckedUpdateWithoutRefundInputObjectSchema } from './PaymentUncheckedUpdateWithoutRefundInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PaymentCreateWithoutRefundInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutRefundInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PaymentCreateOrConnectWithoutRefundInputObjectSchema).optional(),
  upsert: z.lazy(() => PaymentUpsertWithoutRefundInputObjectSchema).optional(),
  connect: z.lazy(() => PaymentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PaymentUpdateToOneWithWhereWithoutRefundInputObjectSchema), z.lazy(() => PaymentUpdateWithoutRefundInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutRefundInputObjectSchema)]).optional()
}).strict();
export const PaymentUpdateOneRequiredWithoutRefundNestedInputObjectSchema: z.ZodType<Prisma.PaymentUpdateOneRequiredWithoutRefundNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateOneRequiredWithoutRefundNestedInput>;
export const PaymentUpdateOneRequiredWithoutRefundNestedInputObjectZodSchema = makeSchema();
