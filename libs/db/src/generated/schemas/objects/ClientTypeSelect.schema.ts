import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { ClientTypeCountOutputTypeArgsObjectSchema as ClientTypeCountOutputTypeArgsObjectSchema } from './ClientTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientTypeSelectObjectSchema: z.ZodType<Prisma.ClientTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeSelect>;
export const ClientTypeSelectObjectZodSchema = makeSchema();
