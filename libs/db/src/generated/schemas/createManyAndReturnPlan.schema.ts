import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanSelectObjectSchema as PlanSelectObjectSchema } from './objects/PlanSelect.schema';
import { PlanCreateManyInputObjectSchema as PlanCreateManyInputObjectSchema } from './objects/PlanCreateManyInput.schema';

export const PlanCreateManyAndReturnSchema: z.ZodType<Prisma.PlanCreateManyAndReturnArgs> = z.object({ select: PlanSelectObjectSchema.optional(), data: z.union([ PlanCreateManyInputObjectSchema, z.array(PlanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PlanCreateManyAndReturnArgs>;

export const PlanCreateManyAndReturnZodSchema = z.object({ select: PlanSelectObjectSchema.optional(), data: z.union([ PlanCreateManyInputObjectSchema, z.array(PlanCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();