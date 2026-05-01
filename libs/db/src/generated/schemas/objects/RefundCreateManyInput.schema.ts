import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status: RefundStatusSchema.optional(),
  paymentId: z.number().int()
}).strict();
export const RefundCreateManyInputObjectSchema: z.ZodType<Prisma.RefundCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundCreateManyInput>;
export const RefundCreateManyInputObjectZodSchema = makeSchema();
