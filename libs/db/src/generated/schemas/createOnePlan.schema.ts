import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanSelectObjectSchema as PlanSelectObjectSchema } from './objects/PlanSelect.schema';
import { PlanIncludeObjectSchema as PlanIncludeObjectSchema } from './objects/PlanInclude.schema';
import { PlanCreateInputObjectSchema as PlanCreateInputObjectSchema } from './objects/PlanCreateInput.schema';
import { PlanUncheckedCreateInputObjectSchema as PlanUncheckedCreateInputObjectSchema } from './objects/PlanUncheckedCreateInput.schema';

export const PlanCreateOneSchema: z.ZodType<Prisma.PlanCreateArgs> = z.object({ select: PlanSelectObjectSchema.optional(), include: PlanIncludeObjectSchema.optional(), data: z.union([PlanCreateInputObjectSchema, PlanUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PlanCreateArgs>;

export const PlanCreateOneZodSchema = z.object({ select: PlanSelectObjectSchema.optional(), include: PlanIncludeObjectSchema.optional(), data: z.union([PlanCreateInputObjectSchema, PlanUncheckedCreateInputObjectSchema]) }).strict();