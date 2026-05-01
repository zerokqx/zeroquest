import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanSelectObjectSchema as PlanSelectObjectSchema } from './objects/PlanSelect.schema';
import { PlanIncludeObjectSchema as PlanIncludeObjectSchema } from './objects/PlanInclude.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './objects/PlanWhereUniqueInput.schema';
import { PlanCreateInputObjectSchema as PlanCreateInputObjectSchema } from './objects/PlanCreateInput.schema';
import { PlanUncheckedCreateInputObjectSchema as PlanUncheckedCreateInputObjectSchema } from './objects/PlanUncheckedCreateInput.schema';
import { PlanUpdateInputObjectSchema as PlanUpdateInputObjectSchema } from './objects/PlanUpdateInput.schema';
import { PlanUncheckedUpdateInputObjectSchema as PlanUncheckedUpdateInputObjectSchema } from './objects/PlanUncheckedUpdateInput.schema';

export const PlanUpsertOneSchema: z.ZodType<Prisma.PlanUpsertArgs> = z.object({ select: PlanSelectObjectSchema.optional(), include: PlanIncludeObjectSchema.optional(), where: PlanWhereUniqueInputObjectSchema, create: z.union([ PlanCreateInputObjectSchema, PlanUncheckedCreateInputObjectSchema ]), update: z.union([ PlanUpdateInputObjectSchema, PlanUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PlanUpsertArgs>;

export const PlanUpsertOneZodSchema = z.object({ select: PlanSelectObjectSchema.optional(), include: PlanIncludeObjectSchema.optional(), where: PlanWhereUniqueInputObjectSchema, create: z.union([ PlanCreateInputObjectSchema, PlanUncheckedCreateInputObjectSchema ]), update: z.union([ PlanUpdateInputObjectSchema, PlanUncheckedUpdateInputObjectSchema ]) }).strict();