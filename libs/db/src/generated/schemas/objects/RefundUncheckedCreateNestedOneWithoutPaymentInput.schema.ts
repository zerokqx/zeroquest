import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundCreateWithoutPaymentInputObjectSchema as RefundCreateWithoutPaymentInputObjectSchema } from './RefundCreateWithoutPaymentInput.schema';
import { RefundUncheckedCreateWithoutPaymentInputObjectSchema as RefundUncheckedCreateWithoutPaymentInputObjectSchema } from './RefundUncheckedCreateWithoutPaymentInput.schema';
import { RefundCreateOrConnectWithoutPaymentInputObjectSchema as RefundCreateOrConnectWithoutPaymentInputObjectSchema } from './RefundCreateOrConnectWithoutPaymentInput.schema';
import { RefundWhereUniqueInputObjectSchema as RefundWhereUniqueInputObjectSchema } from './RefundWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RefundCreateWithoutPaymentInputObjectSchema), z.lazy(() => RefundUncheckedCreateWithoutPaymentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RefundCreateOrConnectWithoutPaymentInputObjectSchema).optional(),
  connect: z.lazy(() => RefundWhereUniqueInputObjectSchema).optional()
}).strict();
export const RefundUncheckedCreateNestedOneWithoutPaymentInputObjectSchema: z.ZodType<Prisma.RefundUncheckedCreateNestedOneWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundUncheckedCreateNestedOneWithoutPaymentInput>;
export const RefundUncheckedCreateNestedOneWithoutPaymentInputObjectZodSchema = makeSchema();
