import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeArgsObjectSchema as ClientTypeArgsObjectSchema } from './ClientTypeArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userAgentHash: z.boolean().optional(),
  clientType: z.union([z.boolean(), z.lazy(() => ClientTypeArgsObjectSchema)]).optional(),
  clientTypeId: z.boolean().optional(),
  refreshTokenJti: z.boolean().optional(),
  accessTokenJti: z.boolean().optional(),
  refreshTokenHash: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional()
}).strict();
export const SessionSelectObjectSchema: z.ZodType<Prisma.SessionSelect> = makeSchema() as unknown as z.ZodType<Prisma.SessionSelect>;
export const SessionSelectObjectZodSchema = makeSchema();
