import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenCreateManyInputObjectSchema as TotpTokenCreateManyInputObjectSchema } from './objects/TotpTokenCreateManyInput.schema';

export const TotpTokenCreateManySchema: z.ZodType<Prisma.TotpTokenCreateManyArgs> = z.object({ data: z.union([ TotpTokenCreateManyInputObjectSchema, z.array(TotpTokenCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TotpTokenCreateManyArgs>;

export const TotpTokenCreateManyZodSchema = z.object({ data: z.union([ TotpTokenCreateManyInputObjectSchema, z.array(TotpTokenCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();