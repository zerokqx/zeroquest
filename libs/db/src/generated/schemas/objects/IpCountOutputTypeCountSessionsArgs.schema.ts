import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './SessionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereInputObjectSchema).optional()
}).strict();
export const IpCountOutputTypeCountSessionsArgsObjectSchema = makeSchema();
export const IpCountOutputTypeCountSessionsArgsObjectZodSchema = makeSchema();
