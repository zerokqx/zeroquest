import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './objects/TotpMfaWhereInput.schema';

export const TotpMfaDeleteManySchema: z.ZodType<Prisma.TotpMfaDeleteManyArgs> = z.object({ where: TotpMfaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TotpMfaDeleteManyArgs>;

export const TotpMfaDeleteManyZodSchema = z.object({ where: TotpMfaWhereInputObjectSchema.optional() }).strict();