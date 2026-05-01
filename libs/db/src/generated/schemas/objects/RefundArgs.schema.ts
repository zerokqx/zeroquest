import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundSelectObjectSchema as RefundSelectObjectSchema } from './RefundSelect.schema';
import { RefundIncludeObjectSchema as RefundIncludeObjectSchema } from './RefundInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RefundSelectObjectSchema).optional(),
  include: z.lazy(() => RefundIncludeObjectSchema).optional()
}).strict();
export const RefundArgsObjectSchema = makeSchema();
export const RefundArgsObjectZodSchema = makeSchema();
