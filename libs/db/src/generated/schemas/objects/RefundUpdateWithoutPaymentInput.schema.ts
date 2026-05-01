import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema';
import { EnumRefundStatusFieldUpdateOperationsInputObjectSchema as EnumRefundStatusFieldUpdateOperationsInputObjectSchema } from './EnumRefundStatusFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  status: z.union([RefundStatusSchema, z.lazy(() => EnumRefundStatusFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RefundUpdateWithoutPaymentInputObjectSchema: z.ZodType<Prisma.RefundUpdateWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundUpdateWithoutPaymentInput>;
export const RefundUpdateWithoutPaymentInputObjectZodSchema = makeSchema();
