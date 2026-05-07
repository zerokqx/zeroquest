import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './objects/TotpTokenWhereInput.schema';

export const TotpTokenDeleteManySchema: z.ZodType<Prisma.TotpTokenDeleteManyArgs> = z.object({ where: TotpTokenWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TotpTokenDeleteManyArgs>;

export const TotpTokenDeleteManyZodSchema = z.object({ where: TotpTokenWhereInputObjectSchema.optional() }).strict();