import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './PlanWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PlanWhereInputObjectSchema).optional(),
  some: z.lazy(() => PlanWhereInputObjectSchema).optional(),
  none: z.lazy(() => PlanWhereInputObjectSchema).optional()
}).strict();
export const PlanListRelationFilterObjectSchema: z.ZodType<Prisma.PlanListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PlanListRelationFilter>;
export const PlanListRelationFilterObjectZodSchema = makeSchema();
