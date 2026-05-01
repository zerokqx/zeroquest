import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanSelectObjectSchema as PlanSelectObjectSchema } from './objects/PlanSelect.schema';
import { PlanIncludeObjectSchema as PlanIncludeObjectSchema } from './objects/PlanInclude.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './objects/PlanWhereUniqueInput.schema';

export const PlanDeleteOneSchema: z.ZodType<Prisma.PlanDeleteArgs> = z.object({ select: PlanSelectObjectSchema.optional(), include: PlanIncludeObjectSchema.optional(), where: PlanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PlanDeleteArgs>;

export const PlanDeleteOneZodSchema = z.object({ select: PlanSelectObjectSchema.optional(), include: PlanIncludeObjectSchema.optional(), where: PlanWhereUniqueInputObjectSchema }).strict();