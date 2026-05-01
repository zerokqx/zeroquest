import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesSelectObjectSchema as LegalAcceptancesSelectObjectSchema } from './objects/LegalAcceptancesSelect.schema';
import { LegalAcceptancesIncludeObjectSchema as LegalAcceptancesIncludeObjectSchema } from './objects/LegalAcceptancesInclude.schema';
import { LegalAcceptancesUpdateInputObjectSchema as LegalAcceptancesUpdateInputObjectSchema } from './objects/LegalAcceptancesUpdateInput.schema';
import { LegalAcceptancesUncheckedUpdateInputObjectSchema as LegalAcceptancesUncheckedUpdateInputObjectSchema } from './objects/LegalAcceptancesUncheckedUpdateInput.schema';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './objects/LegalAcceptancesWhereUniqueInput.schema';

export const LegalAcceptancesUpdateOneSchema: z.ZodType<Prisma.LegalAcceptancesUpdateArgs> = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), include: LegalAcceptancesIncludeObjectSchema.optional(), data: z.union([LegalAcceptancesUpdateInputObjectSchema, LegalAcceptancesUncheckedUpdateInputObjectSchema]), where: LegalAcceptancesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateArgs>;

export const LegalAcceptancesUpdateOneZodSchema = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), include: LegalAcceptancesIncludeObjectSchema.optional(), data: z.union([LegalAcceptancesUpdateInputObjectSchema, LegalAcceptancesUncheckedUpdateInputObjectSchema]), where: LegalAcceptancesWhereUniqueInputObjectSchema }).strict();