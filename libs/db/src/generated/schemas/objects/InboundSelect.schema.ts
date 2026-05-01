import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanFindManySchema as PlanFindManySchema } from '../findManyPlan.schema';
import { InboundCountOutputTypeArgsObjectSchema as InboundCountOutputTypeArgsObjectSchema } from './InboundCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  enable: z.boolean().optional(),
  name: z.boolean().optional(),
  inboundId: z.boolean().optional(),
  plans: z.union([z.boolean(), z.lazy(() => PlanFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => InboundCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const InboundSelectObjectSchema: z.ZodType<Prisma.InboundSelect> = makeSchema() as unknown as z.ZodType<Prisma.InboundSelect>;
export const InboundSelectObjectZodSchema = makeSchema();
