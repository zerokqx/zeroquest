import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './objects/PlanWhereInput.schema';

export const PlanDeleteManySchema: z.ZodType<Prisma.PlanDeleteManyArgs> = z.object({ where: PlanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PlanDeleteManyArgs>;

export const PlanDeleteManyZodSchema = z.object({ where: PlanWhereInputObjectSchema.optional() }).strict();