import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: RefundStatusSchema.optional(),
  paymentId: z.number().int()
}).strict();
export const RefundUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RefundUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundUncheckedCreateInput>;
export const RefundUncheckedCreateInputObjectZodSchema = makeSchema();
