import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesUpdateManyMutationInputObjectSchema as LegalAcceptancesUpdateManyMutationInputObjectSchema } from './objects/LegalAcceptancesUpdateManyMutationInput.schema';
import { LegalAcceptancesWhereInputObjectSchema as LegalAcceptancesWhereInputObjectSchema } from './objects/LegalAcceptancesWhereInput.schema';

export const LegalAcceptancesUpdateManySchema: z.ZodType<Prisma.LegalAcceptancesUpdateManyArgs> = z.object({ data: LegalAcceptancesUpdateManyMutationInputObjectSchema, where: LegalAcceptancesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateManyArgs>;

export const LegalAcceptancesUpdateManyZodSchema = z.object({ data: LegalAcceptancesUpdateManyMutationInputObjectSchema, where: LegalAcceptancesWhereInputObjectSchema.optional() }).strict();