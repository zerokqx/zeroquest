import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RefundArgsObjectSchema as RefundArgsObjectSchema } from './RefundArgs.schema';
import { PlanArgsObjectSchema as PlanArgsObjectSchema } from './PlanArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  refund: z.union([z.boolean(), z.lazy(() => RefundArgsObjectSchema)]).optional(),
  plan: z.union([z.boolean(), z.lazy(() => PlanArgsObjectSchema)]).optional()
}).strict();
export const PaymentIncludeObjectSchema: z.ZodType<Prisma.PaymentInclude> = makeSchema() as unknown as z.ZodType<Prisma.PaymentInclude>;
export const PaymentIncludeObjectZodSchema = makeSchema();
