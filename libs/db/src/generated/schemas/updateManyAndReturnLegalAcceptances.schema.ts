import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesSelectObjectSchema as LegalAcceptancesSelectObjectSchema } from './objects/LegalAcceptancesSelect.schema';
import { LegalAcceptancesUpdateManyMutationInputObjectSchema as LegalAcceptancesUpdateManyMutationInputObjectSchema } from './objects/LegalAcceptancesUpdateManyMutationInput.schema';
import { LegalAcceptancesWhereInputObjectSchema as LegalAcceptancesWhereInputObjectSchema } from './objects/LegalAcceptancesWhereInput.schema';

export const LegalAcceptancesUpdateManyAndReturnSchema: z.ZodType<Prisma.LegalAcceptancesUpdateManyAndReturnArgs> = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), data: LegalAcceptancesUpdateManyMutationInputObjectSchema, where: LegalAcceptancesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateManyAndReturnArgs>;

export const LegalAcceptancesUpdateManyAndReturnZodSchema = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), data: LegalAcceptancesUpdateManyMutationInputObjectSchema, where: LegalAcceptancesWhereInputObjectSchema.optional() }).strict();