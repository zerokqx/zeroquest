import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanUpdateManyMutationInputObjectSchema as PlanUpdateManyMutationInputObjectSchema } from './objects/PlanUpdateManyMutationInput.schema';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './objects/PlanWhereInput.schema';

export const PlanUpdateManySchema: z.ZodType<Prisma.PlanUpdateManyArgs> = z.object({ data: PlanUpdateManyMutationInputObjectSchema, where: PlanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PlanUpdateManyArgs>;

export const PlanUpdateManyZodSchema = z.object({ data: PlanUpdateManyMutationInputObjectSchema, where: PlanWhereInputObjectSchema.optional() }).strict();