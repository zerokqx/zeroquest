import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: RefundStatusSchema.optional()
}).strict();
export const RefundUncheckedCreateWithoutPaymentInputObjectSchema: z.ZodType<Prisma.RefundUncheckedCreateWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundUncheckedCreateWithoutPaymentInput>;
export const RefundUncheckedCreateWithoutPaymentInputObjectZodSchema = makeSchema();
