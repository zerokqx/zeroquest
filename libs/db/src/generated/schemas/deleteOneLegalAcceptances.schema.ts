import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesSelectObjectSchema as LegalAcceptancesSelectObjectSchema } from './objects/LegalAcceptancesSelect.schema';
import { LegalAcceptancesIncludeObjectSchema as LegalAcceptancesIncludeObjectSchema } from './objects/LegalAcceptancesInclude.schema';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './objects/LegalAcceptancesWhereUniqueInput.schema';

export const LegalAcceptancesDeleteOneSchema: z.ZodType<Prisma.LegalAcceptancesDeleteArgs> = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), include: LegalAcceptancesIncludeObjectSchema.optional(), where: LegalAcceptancesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesDeleteArgs>;

export const LegalAcceptancesDeleteOneZodSchema = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), include: LegalAcceptancesIncludeObjectSchema.optional(), where: LegalAcceptancesWhereUniqueInputObjectSchema }).strict();