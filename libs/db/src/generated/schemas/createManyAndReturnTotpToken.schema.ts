import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenSelectObjectSchema as TotpTokenSelectObjectSchema } from './objects/TotpTokenSelect.schema';
import { TotpTokenCreateManyInputObjectSchema as TotpTokenCreateManyInputObjectSchema } from './objects/TotpTokenCreateManyInput.schema';

export const TotpTokenCreateManyAndReturnSchema: z.ZodType<Prisma.TotpTokenCreateManyAndReturnArgs> = z.object({ select: TotpTokenSelectObjectSchema.optional(), data: z.union([ TotpTokenCreateManyInputObjectSchema, z.array(TotpTokenCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TotpTokenCreateManyAndReturnArgs>;

export const TotpTokenCreateManyAndReturnZodSchema = z.object({ select: TotpTokenSelectObjectSchema.optional(), data: z.union([ TotpTokenCreateManyInputObjectSchema, z.array(TotpTokenCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();