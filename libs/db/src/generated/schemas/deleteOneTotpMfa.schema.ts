import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaSelectObjectSchema as TotpMfaSelectObjectSchema } from './objects/TotpMfaSelect.schema';
import { TotpMfaIncludeObjectSchema as TotpMfaIncludeObjectSchema } from './objects/TotpMfaInclude.schema';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './objects/TotpMfaWhereUniqueInput.schema';

export const TotpMfaDeleteOneSchema: z.ZodType<Prisma.TotpMfaDeleteArgs> = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), where: TotpMfaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TotpMfaDeleteArgs>;

export const TotpMfaDeleteOneZodSchema = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), where: TotpMfaWhereUniqueInputObjectSchema }).strict();