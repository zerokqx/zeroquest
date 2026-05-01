import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentArgsObjectSchema as PaymentArgsObjectSchema } from './PaymentArgs.schema'

const makeSchema = () => z.object({
  payment: z.union([z.boolean(), z.lazy(() => PaymentArgsObjectSchema)]).optional()
}).strict();
export const RefundIncludeObjectSchema: z.ZodType<Prisma.RefundInclude> = makeSchema() as unknown as z.ZodType<Prisma.RefundInclude>;
export const RefundIncludeObjectZodSchema = makeSchema();
