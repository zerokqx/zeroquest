import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesSelectObjectSchema as LegalAcceptancesSelectObjectSchema } from './objects/LegalAcceptancesSelect.schema';
import { LegalAcceptancesIncludeObjectSchema as LegalAcceptancesIncludeObjectSchema } from './objects/LegalAcceptancesInclude.schema';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './objects/LegalAcceptancesWhereUniqueInput.schema';
import { LegalAcceptancesCreateInputObjectSchema as LegalAcceptancesCreateInputObjectSchema } from './objects/LegalAcceptancesCreateInput.schema';
import { LegalAcceptancesUncheckedCreateInputObjectSchema as LegalAcceptancesUncheckedCreateInputObjectSchema } from './objects/LegalAcceptancesUncheckedCreateInput.schema';
import { LegalAcceptancesUpdateInputObjectSchema as LegalAcceptancesUpdateInputObjectSchema } from './objects/LegalAcceptancesUpdateInput.schema';
import { LegalAcceptancesUncheckedUpdateInputObjectSchema as LegalAcceptancesUncheckedUpdateInputObjectSchema } from './objects/LegalAcceptancesUncheckedUpdateInput.schema';

export const LegalAcceptancesUpsertOneSchema: z.ZodType<Prisma.LegalAcceptancesUpsertArgs> = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), include: LegalAcceptancesIncludeObjectSchema.optional(), where: LegalAcceptancesWhereUniqueInputObjectSchema, create: z.union([ LegalAcceptancesCreateInputObjectSchema, LegalAcceptancesUncheckedCreateInputObjectSchema ]), update: z.union([ LegalAcceptancesUpdateInputObjectSchema, LegalAcceptancesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesUpsertArgs>;

export const LegalAcceptancesUpsertOneZodSchema = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), include: LegalAcceptancesIncludeObjectSchema.optional(), where: LegalAcceptancesWhereUniqueInputObjectSchema, create: z.union([ LegalAcceptancesCreateInputObjectSchema, LegalAcceptancesUncheckedCreateInputObjectSchema ]), update: z.union([ LegalAcceptancesUpdateInputObjectSchema, LegalAcceptancesUncheckedUpdateInputObjectSchema ]) }).strict();