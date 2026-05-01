import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanSelectObjectSchema as PlanSelectObjectSchema } from './PlanSelect.schema';
import { PlanIncludeObjectSchema as PlanIncludeObjectSchema } from './PlanInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PlanSelectObjectSchema).optional(),
  include: z.lazy(() => PlanIncludeObjectSchema).optional()
}).strict();
export const PlanArgsObjectSchema = makeSchema();
export const PlanArgsObjectZodSchema = makeSchema();
