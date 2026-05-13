import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaCreateManyInputObjectSchema as TotpMfaCreateManyInputObjectSchema } from './objects/TotpMfaCreateManyInput.schema';

export const TotpMfaCreateManySchema: z.ZodType<Prisma.TotpMfaCreateManyArgs> = z.object({ data: z.union([ TotpMfaCreateManyInputObjectSchema, z.array(TotpMfaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TotpMfaCreateManyArgs>;

export const TotpMfaCreateManyZodSchema = z.object({ data: z.union([ TotpMfaCreateManyInputObjectSchema, z.array(TotpMfaCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();