import * as z from 'zod';
import type { Prisma } from '../../client';
import { InboundSelectObjectSchema as InboundSelectObjectSchema } from './InboundSelect.schema';
import { InboundIncludeObjectSchema as InboundIncludeObjectSchema } from './InboundInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => InboundSelectObjectSchema).optional(),
  include: z.lazy(() => InboundIncludeObjectSchema).optional()
}).strict();
export const InboundArgsObjectSchema = makeSchema();
export const InboundArgsObjectZodSchema = makeSchema();
