import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { RefundStatusSchema } from '../enums/RefundStatus.schema';
import { EnumRefundStatusFieldUpdateOperationsInputObjectSchema as EnumRefundStatusFieldUpdateOperationsInputObjectSchema } from './EnumRefundStatusFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([RefundStatusSchema, z.lazy(() => EnumRefundStatusFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RefundUncheckedUpdateWithoutPaymentInputObjectSchema: z.ZodType<Prisma.RefundUncheckedUpdateWithoutPaymentInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundUncheckedUpdateWithoutPaymentInput>;
export const RefundUncheckedUpdateWithoutPaymentInputObjectZodSchema = makeSchema();
