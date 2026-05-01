import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema';
import { PaymentCreateNestedOneWithoutRefundInputObjectSchema as PaymentCreateNestedOneWithoutRefundInputObjectSchema } from './PaymentCreateNestedOneWithoutRefundInput.schema'

const makeSchema = () => z.object({
  status: RefundStatusSchema.optional(),
  payment: z.lazy(() => PaymentCreateNestedOneWithoutRefundInputObjectSchema)
}).strict();
export const RefundCreateInputObjectSchema: z.ZodType<Prisma.RefundCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundCreateInput>;
export const RefundCreateInputObjectZodSchema = makeSchema();
