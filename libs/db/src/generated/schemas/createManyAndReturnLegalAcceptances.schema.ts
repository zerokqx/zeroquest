import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesSelectObjectSchema as LegalAcceptancesSelectObjectSchema } from './objects/LegalAcceptancesSelect.schema';
import { LegalAcceptancesCreateManyInputObjectSchema as LegalAcceptancesCreateManyInputObjectSchema } from './objects/LegalAcceptancesCreateManyInput.schema';

export const LegalAcceptancesCreateManyAndReturnSchema: z.ZodType<Prisma.LegalAcceptancesCreateManyAndReturnArgs> = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), data: z.union([ LegalAcceptancesCreateManyInputObjectSchema, z.array(LegalAcceptancesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateManyAndReturnArgs>;

export const LegalAcceptancesCreateManyAndReturnZodSchema = z.object({ select: LegalAcceptancesSelectObjectSchema.optional(), data: z.union([ LegalAcceptancesCreateManyInputObjectSchema, z.array(LegalAcceptancesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();