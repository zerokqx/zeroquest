import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesWhereInputObjectSchema as LegalAcceptancesWhereInputObjectSchema } from './objects/LegalAcceptancesWhereInput.schema';

export const LegalAcceptancesDeleteManySchema: z.ZodType<Prisma.LegalAcceptancesDeleteManyArgs> = z.object({ where: LegalAcceptancesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesDeleteManyArgs>;

export const LegalAcceptancesDeleteManyZodSchema = z.object({ where: LegalAcceptancesWhereInputObjectSchema.optional() }).strict();