import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundUpdateWithoutPaymentInputObjectSchema as RefundUpdateWithoutPaymentInputObjectSchema } from './RefundUpdateWithoutPaymentInput.schema';
import { RefundUncheckedUpdateWithoutPaymentInputObjectSchema as RefundUncheckedUpdateWithoutPaymentInputObjectSchema } from './RefundUncheckedUpdateWithoutPaymentInput.schema';
import { RefundCreateWithoutPaymentInputObjectSchema as RefundCreateWithoutPaymentInputObjectSchema } from './RefundCreateWithoutPaymentInput.schema';
import { RefundUncheckedCreateWithoutPaymentInputObjectSchema as RefundUncheckedCreateWithoutPaymentInputObjectSchema } from './RefundUncheckedCreateWithoutPaymentInput.schema';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './RefundWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RefundUpdateWithoutPaymentInputObjectSchema), z.lazy(() => RefundUncheckedUpdateWithoutPaymentInputObjectSchema)]),
  create: z.union([z.lazy(() => RefundCreateWithoutPaymentInputObjectSchema), z.lazy(() => RefundUncheckedCreateWithoutPaymentInputObjectSchema)]),
  where: z.lazy(() => RefundWhereInputObjectSchema).optional()
}).strict();
export const RefundUpsertWithoutPaymentInputObjectSchema: z.ZodType<Prisma.RefundUpsertWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundUpsertWithoutPaymentInput>;
export const RefundUpsertWithoutPaymentInputObjectZodSchema = makeSchema();
