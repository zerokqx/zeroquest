import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanSelectObjectSchema as PlanSelectObjectSchema } from './objects/PlanSelect.schema';
import { PlanIncludeObjectSchema as PlanIncludeObjectSchema } from './objects/PlanInclude.schema';
import { PlanUpdateInputObjectSchema as PlanUpdateInputObjectSchema } from './objects/PlanUpdateInput.schema';
import { PlanUncheckedUpdateInputObjectSchema as PlanUncheckedUpdateInputObjectSchema } from './objects/PlanUncheckedUpdateInput.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './objects/PlanWhereUniqueInput.schema';

export const PlanUpdateOneSchema: z.ZodType<Prisma.PlanUpdateArgs> = z.object({ select: PlanSelectObjectSchema.optional(), include: PlanIncludeObjectSchema.optional(), data: z.union([PlanUpdateInputObjectSchema, PlanUncheckedUpdateInputObjectSchema]), where: PlanWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PlanUpdateArgs>;

export const PlanUpdateOneZodSchema = z.object({ select: PlanSelectObjectSchema.optional(), include: PlanIncludeObjectSchema.optional(), data: z.union([PlanUpdateInputObjectSchema, PlanUncheckedUpdateInputObjectSchema]), where: PlanWhereUniqueInputObjectSchema }).strict();