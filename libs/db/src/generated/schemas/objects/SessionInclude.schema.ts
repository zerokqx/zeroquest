import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeArgsObjectSchema as ClientTypeArgsObjectSchema } from './ClientTypeArgs.schema';
import { IpArgsObjectSchema as IpArgsObjectSchema } from './IpArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  clientType: z.union([z.boolean(), z.lazy(() => ClientTypeArgsObjectSchema)]).optional(),
  ip: z.union([z.boolean(), z.lazy(() => IpArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const SessionIncludeObjectSchema: z.ZodType<Prisma.SessionInclude> = makeSchema() as unknown as z.ZodType<Prisma.SessionInclude>;
export const SessionIncludeObjectZodSchema = makeSchema();
