import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { ClientTypeCountOutputTypeArgsObjectSchema as ClientTypeCountOutputTypeArgsObjectSchema } from './ClientTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientTypeIncludeObjectSchema: z.ZodType<Prisma.ClientTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeInclude>;
export const ClientTypeIncludeObjectZodSchema = makeSchema();
