import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanCountOutputTypeSelectObjectSchema as PlanCountOutputTypeSelectObjectSchema } from './PlanCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PlanCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const PlanCountOutputTypeArgsObjectSchema = makeSchema();
export const PlanCountOutputTypeArgsObjectZodSchema = makeSchema();
