import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenSelectObjectSchema as TotpTokenSelectObjectSchema } from './objects/TotpTokenSelect.schema';
import { TotpTokenIncludeObjectSchema as TotpTokenIncludeObjectSchema } from './objects/TotpTokenInclude.schema';
import { TotpTokenWhereUniqueInputObjectSchema as TotpTokenWhereUniqueInputObjectSchema } from './objects/TotpTokenWhereUniqueInput.schema';

export const TotpTokenDeleteOneSchema: z.ZodType<Prisma.TotpTokenDeleteArgs> = z.object({ select: TotpTokenSelectObjectSchema.optional(), include: TotpTokenIncludeObjectSchema.optional(), where: TotpTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TotpTokenDeleteArgs>;

export const TotpTokenDeleteOneZodSchema = z.object({ select: TotpTokenSelectObjectSchema.optional(), include: TotpTokenIncludeObjectSchema.optional(), where: TotpTokenWhereUniqueInputObjectSchema }).strict();