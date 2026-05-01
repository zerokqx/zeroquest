import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeCountOutputTypeSelectObjectSchema as ClientTypeCountOutputTypeSelectObjectSchema } from './ClientTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClientTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ClientTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const ClientTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
