import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeSelectObjectSchema as ClientTypeSelectObjectSchema } from './ClientTypeSelect.schema';
import { ClientTypeIncludeObjectSchema as ClientTypeIncludeObjectSchema } from './ClientTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClientTypeSelectObjectSchema).optional(),
  include: z.lazy(() => ClientTypeIncludeObjectSchema).optional()
}).strict();
export const ClientTypeArgsObjectSchema = makeSchema();
export const ClientTypeArgsObjectZodSchema = makeSchema();
