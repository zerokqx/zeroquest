import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { PlanArgsObjectSchema as PlanArgsObjectSchema } from './PlanArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  plan: z.union([z.boolean(), z.lazy(() => PlanArgsObjectSchema)]).optional()
}).strict();
export const SubscribeIncludeObjectSchema: z.ZodType<Prisma.SubscribeInclude> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeInclude>;
export const SubscribeIncludeObjectZodSchema = makeSchema();
