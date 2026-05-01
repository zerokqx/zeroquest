import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesSelectObjectSchema as LegalAcceptancesSelectObjectSchema } from './objects/LegalAcceptancesSelect.schema';
import { LegalAcceptancesIncludeObjectSchema as LegalAcceptancesIncludeObjectSchema } from './objects/LegalAcceptancesInclude.schema';
import { LegalAcceptancesCreateInputObjectSchema as LegalAcceptancesCreateInputObjectSchema } from './objects/LegalAcceptancesCreateInput.schema';
import { LegalAcceptancesUncheckedCreateInputObjectSchema as LegalAcceptancesUncheckedCreateInputObjectSchema } from './objects/LegalAcceptancesUncheckedCreateInput.schema';

export const LegalAcceptancesCreateOneSchema: z.ZodType<Prisma.LegalAcceptancesCreateArgs> = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), include: LegalAcceptancesIncludeObjectSchema.optional(), data: z.union([LegalAcceptancesCreateInputObjectSchema, LegalAcceptancesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateArgs>;

export const LegalAcceptancesCreateOneZodSchema = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), include: LegalAcceptancesIncludeObjectSchema.optional(), data: z.union([LegalAcceptancesCreateInputObjectSchema, LegalAcceptancesUncheckedCreateInputObjectSchema]) }).strict();