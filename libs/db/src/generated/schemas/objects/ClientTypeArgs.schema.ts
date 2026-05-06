import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeSelectObjectSchema as ClientTypeSelectObjectSchema } from './ClientTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClientTypeSelectObjectSchema).optional()
}).strict();
export const ClientTypeArgsObjectSchema = makeSchema();
export const ClientTypeArgsObjectZodSchema = makeSchema();
