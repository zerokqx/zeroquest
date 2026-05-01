import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesSelectObjectSchema as LegalAcceptancesSelectObjectSchema } from './objects/LegalAcceptancesSelect.schema';
import { LegalAcceptancesIncludeObjectSchema as LegalAcceptancesIncludeObjectSchema } from './objects/LegalAcceptancesInclude.schema';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './objects/LegalAcceptancesWhereUniqueInput.schema';

export const LegalAcceptancesFindUniqueOrThrowSchema: z.ZodType<Prisma.LegalAcceptancesFindUniqueOrThrowArgs> = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), include: LegalAcceptancesIncludeObjectSchema.optional(), where: LegalAcceptancesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesFindUniqueOrThrowArgs>;

export const LegalAcceptancesFindUniqueOrThrowZodSchema = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), include: LegalAcceptancesIncludeObjectSchema.optional(), where: LegalAcceptancesWhereUniqueInputObjectSchema }).strict();