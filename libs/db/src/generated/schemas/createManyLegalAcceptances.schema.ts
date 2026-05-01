import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesCreateManyInputObjectSchema as LegalAcceptancesCreateManyInputObjectSchema } from './objects/LegalAcceptancesCreateManyInput.schema';

export const LegalAcceptancesCreateManySchema: z.ZodType<Prisma.LegalAcceptancesCreateManyArgs> = z.object({ data: z.union([ LegalAcceptancesCreateManyInputObjectSchema, z.array(LegalAcceptancesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateManyArgs>;

export const LegalAcceptancesCreateManyZodSchema = z.object({ data: z.union([ LegalAcceptancesCreateManyInputObjectSchema, z.array(LegalAcceptancesCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();