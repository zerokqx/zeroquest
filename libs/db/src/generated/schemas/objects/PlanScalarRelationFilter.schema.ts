import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './PlanWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PlanWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => PlanWhereInputObjectSchema).optional()
}).strict();
export const PlanScalarRelationFilterObjectSchema: z.ZodType<Prisma.PlanScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PlanScalarRelationFilter>;
export const PlanScalarRelationFilterObjectZodSchema = makeSchema();
