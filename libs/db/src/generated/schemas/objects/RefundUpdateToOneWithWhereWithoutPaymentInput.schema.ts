import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './RefundWhereInput.schema';
import { RefundUpdateWithoutPaymentInputObjectSchema as RefundUpdateWithoutPaymentInputObjectSchema } from './RefundUpdateWithoutPaymentInput.schema';
import { RefundUncheckedUpdateWithoutPaymentInputObjectSchema as RefundUncheckedUpdateWithoutPaymentInputObjectSchema } from './RefundUncheckedUpdateWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RefundWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RefundUpdateWithoutPaymentInputObjectSchema), z.lazy(() => RefundUncheckedUpdateWithoutPaymentInputObjectSchema)])
}).strict();
export const RefundUpdateToOneWithWhereWithoutPaymentInputObjectSchema: z.ZodType<Prisma.RefundUpdateToOneWithWhereWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundUpdateToOneWithWhereWithoutPaymentInput>;
export const RefundUpdateToOneWithWhereWithoutPaymentInputObjectZodSchema = makeSchema();
