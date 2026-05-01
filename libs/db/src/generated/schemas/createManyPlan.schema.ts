import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanCreateManyInputObjectSchema as PlanCreateManyInputObjectSchema } from './objects/PlanCreateManyInput.schema';

export const PlanCreateManySchema: z.ZodType<Prisma.PlanCreateManyArgs> = z.object({ data: z.union([ PlanCreateManyInputObjectSchema, z.array(PlanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PlanCreateManyArgs>;

export const PlanCreateManyZodSchema = z.object({ data: z.union([ PlanCreateManyInputObjectSchema, z.array(PlanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();