import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaSelectObjectSchema as TotpMfaSelectObjectSchema } from './objects/TotpMfaSelect.schema';
import { TotpMfaIncludeObjectSchema as TotpMfaIncludeObjectSchema } from './objects/TotpMfaInclude.schema';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './objects/TotpMfaWhereUniqueInput.schema';

export const TotpMfaFindUniqueSchema: z.ZodType<Prisma.TotpMfaFindUniqueArgs> = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), where: TotpMfaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TotpMfaFindUniqueArgs>;

export const TotpMfaFindUniqueZodSchema = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), where: TotpMfaWhereUniqueInputObjectSchema }).strict();