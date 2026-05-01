import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './PlanWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => PlanWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => PlanWhereInputObjectSchema).optional().nullable()
}).strict();
export const PlanNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.PlanNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PlanNullableScalarRelationFilter>;
export const PlanNullableScalarRelationFilterObjectZodSchema = makeSchema();
