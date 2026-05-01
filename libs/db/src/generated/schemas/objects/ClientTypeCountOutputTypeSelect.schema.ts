import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeCountOutputTypeCountSessionsArgsObjectSchema as ClientTypeCountOutputTypeCountSessionsArgsObjectSchema } from './ClientTypeCountOutputTypeCountSessionsArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => ClientTypeCountOutputTypeCountSessionsArgsObjectSchema)]).optional()
}).strict();
export const ClientTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ClientTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeCountOutputTypeSelect>;
export const ClientTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
