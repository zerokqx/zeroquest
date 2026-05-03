import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpCountOutputTypeCountSessionsArgsObjectSchema as IpCountOutputTypeCountSessionsArgsObjectSchema } from './IpCountOutputTypeCountSessionsArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => IpCountOutputTypeCountSessionsArgsObjectSchema)]).optional()
}).strict();
export const IpCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.IpCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.IpCountOutputTypeSelect>;
export const IpCountOutputTypeSelectObjectZodSchema = makeSchema();
