import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaSelectObjectSchema as TotpMfaSelectObjectSchema } from './objects/TotpMfaSelect.schema';
import { TotpMfaIncludeObjectSchema as TotpMfaIncludeObjectSchema } from './objects/TotpMfaInclude.schema';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './objects/TotpMfaWhereUniqueInput.schema';

export const TotpMfaFindUniqueOrThrowSchema: z.ZodType<Prisma.TotpMfaFindUniqueOrThrowArgs> = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), where: TotpMfaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TotpMfaFindUniqueOrThrowArgs>;

export const TotpMfaFindUniqueOrThrowZodSchema = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), where: TotpMfaWhereUniqueInputObjectSchema }).strict();