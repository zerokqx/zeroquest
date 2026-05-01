import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeSelectObjectSchema as SubscribeSelectObjectSchema } from './SubscribeSelect.schema';
import { SubscribeIncludeObjectSchema as SubscribeIncludeObjectSchema } from './SubscribeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SubscribeSelectObjectSchema).optional(),
  include: z.lazy(() => SubscribeIncludeObjectSchema).optional()
}).strict();
export const SubscribeArgsObjectSchema = makeSchema();
export const SubscribeArgsObjectZodSchema = makeSchema();
