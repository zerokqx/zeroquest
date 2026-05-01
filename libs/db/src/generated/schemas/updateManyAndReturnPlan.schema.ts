import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanSelectObjectSchema as PlanSelectObjectSchema } from './objects/PlanSelect.schema';
import { PlanUpdateManyMutationInputObjectSchema as PlanUpdateManyMutationInputObjectSchema } from './objects/PlanUpdateManyMutationInput.schema';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './objects/PlanWhereInput.schema';

export const PlanUpdateManyAndReturnSchema: z.ZodType<Prisma.PlanUpdateManyAndReturnArgs> = z.object({ select: PlanSelectObjectSchema.optional(), data: PlanUpdateManyMutationInputObjectSchema, where: PlanWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PlanUpdateManyAndReturnArgs>;

export const PlanUpdateManyAndReturnZodSchema = z.object({ select: PlanSelectObjectSchema.optional(), data: PlanUpdateManyMutationInputObjectSchema, where: PlanWhereInputObjectSchema.optional() }).strict();