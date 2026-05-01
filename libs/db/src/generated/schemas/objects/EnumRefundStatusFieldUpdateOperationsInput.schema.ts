import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema'

const makeSchema = () => z.object({
  set: RefundStatusSchema.optional()
}).strict();
export const EnumRefundStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumRefundStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumRefundStatusFieldUpdateOperationsInput>;
export const EnumRefundStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
