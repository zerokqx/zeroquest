import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaSelectObjectSchema as TotpMfaSelectObjectSchema } from './objects/TotpMfaSelect.schema';
import { TotpMfaCreateManyInputObjectSchema as TotpMfaCreateManyInputObjectSchema } from './objects/TotpMfaCreateManyInput.schema';

export const TotpMfaCreateManyAndReturnSchema: z.ZodType<Prisma.TotpMfaCreateManyAndReturnArgs> = z.object({ select: TotpMfaSelectObjectSchema.optional(), data: z.union([ TotpMfaCreateManyInputObjectSchema, z.array(TotpMfaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TotpMfaCreateManyAndReturnArgs>;

export const TotpMfaCreateManyAndReturnZodSchema = z.object({ select: TotpMfaSelectObjectSchema.optional(), data: z.union([ TotpMfaCreateManyInputObjectSchema, z.array(TotpMfaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();