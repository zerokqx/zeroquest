import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema'

const makeSchema = () => z.object({
  status: RefundStatusSchema.optional()
}).strict();
export const RefundCreateWithoutPaymentInputObjectSchema: z.ZodType<Prisma.RefundCreateWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundCreateWithoutPaymentInput>;
export const RefundCreateWithoutPaymentInputObjectZodSchema = makeSchema();
