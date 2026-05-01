import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanFindManySchema as PlanFindManySchema } from '../findManyPlan.schema';
import { InboundCountOutputTypeArgsObjectSchema as InboundCountOutputTypeArgsObjectSchema } from './InboundCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  plans: z.union([z.boolean(), z.lazy(() => PlanFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => InboundCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const InboundIncludeObjectSchema: z.ZodType<Prisma.InboundInclude> = makeSchema() as unknown as z.ZodType<Prisma.InboundInclude>;
export const InboundIncludeObjectZodSchema = makeSchema();
