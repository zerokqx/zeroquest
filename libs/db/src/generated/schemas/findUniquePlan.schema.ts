import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanSelectObjectSchema as PlanSelectObjectSchema } from './objects/PlanSelect.schema';
import { PlanIncludeObjectSchema as PlanIncludeObjectSchema } from './objects/PlanInclude.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './objects/PlanWhereUniqueInput.schema';

export const PlanFindUniqueSchema: z.ZodType<Prisma.PlanFindUniqueArgs> = z.object({ select: PlanSelectObjectSchema.optional(), include: PlanIncludeObjectSchema.optional(), where: PlanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PlanFindUniqueArgs>;

export const PlanFindUniqueZodSchema = z.object({ select: PlanSelectObjectSchema.optional(), include: PlanIncludeObjectSchema.optional(), where: PlanWhereUniqueInputObjectSchema }).strict();