import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PlanArgsObjectSchema as PlanArgsObjectSchema } from './PlanArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  vlessLink: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  vlessClientId: z.boolean().optional(),
  userId: z.boolean().optional(),
  email: z.boolean().optional(),
  nextPaymentDate: z.boolean().optional(),
  status: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  plan: z.union([z.boolean(), z.lazy(() => PlanArgsObjectSchema)]).optional(),
  planId: z.boolean().optional(),
  totalGb: z.boolean().optional()
}).strict();
export const SubscribeSelectObjectSchema: z.ZodType<Prisma.SubscribeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeSelect>;
export const SubscribeSelectObjectZodSchema = makeSchema();
