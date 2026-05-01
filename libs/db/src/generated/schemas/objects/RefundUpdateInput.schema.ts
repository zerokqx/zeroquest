import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema';
import { EnumRefundStatusFieldUpdateOperationsInputObjectSchema as EnumRefundStatusFieldUpdateOperationsInputObjectSchema } from './EnumRefundStatusFieldUpdateOperationsInput.schema';
import { PaymentUpdateOneRequiredWithoutRefundNestedInputObjectSchema as PaymentUpdateOneRequiredWithoutRefundNestedInputObjectSchema } from './PaymentUpdateOneRequiredWithoutRefundNestedInput.schema'

const makeSchema = () => z.object({
  status: z.union([RefundStatusSchema, z.lazy(() => EnumRefundStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  payment: z.lazy(() => PaymentUpdateOneRequiredWithoutRefundNestedInputObjectSchema).optional()
}).strict();
export const RefundUpdateInputObjectSchema: z.ZodType<Prisma.RefundUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundUpdateInput>;
export const RefundUpdateInputObjectZodSchema = makeSchema();
