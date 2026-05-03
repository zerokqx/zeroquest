import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeArgsObjectSchema as ClientTypeArgsObjectSchema } from './ClientTypeArgs.schema';
import { IpArgsObjectSchema as IpArgsObjectSchema } from './IpArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userAgentHash: z.boolean().optional(),
  clientType: z.union([z.boolean(), z.lazy(() => ClientTypeArgsObjectSchema)]).optional(),
  clientTypeId: z.boolean().optional(),
  refreshTokenJti: z.boolean().optional(),
  accessTokenJti: z.boolean().optional(),
  refreshTokenHash: z.boolean().optional(),
  ip: z.union([z.boolean(), z.lazy(() => IpArgsObjectSchema)]).optional(),
  expriesAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  ipId: z.boolean().optional()
}).strict();
export const SessionSelectObjectSchema: z.ZodType<Prisma.SessionSelect> = makeSchema() as unknown as z.ZodType<Prisma.SessionSelect>;
export const SessionSelectObjectZodSchema = makeSchema();
