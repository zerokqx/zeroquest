import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { RefundStatusSchema } from '../enums/RefundStatus.schema';
import { EnumRefundStatusFieldUpdateOperationsInputObjectSchema as EnumRefundStatusFieldUpdateOperationsInputObjectSchema } from './EnumRefundStatusFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([RefundStatusSchema, z.lazy(() => EnumRefundStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  paymentId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RefundUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.RefundUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundUncheckedUpdateInput>;
export const RefundUncheckedUpdateInputObjectZodSchema = makeSchema();
