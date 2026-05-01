import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundWhereUniqueInputObjectSchema as RefundWhereUniqueInputObjectSchema } from './RefundWhereUniqueInput.schema';
import { RefundCreateWithoutPaymentInputObjectSchema as RefundCreateWithoutPaymentInputObjectSchema } from './RefundCreateWithoutPaymentInput.schema';
import { RefundUncheckedCreateWithoutPaymentInputObjectSchema as RefundUncheckedCreateWithoutPaymentInputObjectSchema } from './RefundUncheckedCreateWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RefundWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RefundCreateWithoutPaymentInputObjectSchema), z.lazy(() => RefundUncheckedCreateWithoutPaymentInputObjectSchema)])
}).strict();
export const RefundCreateOrConnectWithoutPaymentInputObjectSchema: z.ZodType<Prisma.RefundCreateOrConnectWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundCreateOrConnectWithoutPaymentInput>;
export const RefundCreateOrConnectWithoutPaymentInputObjectZodSchema = makeSchema();
