import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaSelectObjectSchema as TotpMfaSelectObjectSchema } from './objects/TotpMfaSelect.schema';
import { TotpMfaIncludeObjectSchema as TotpMfaIncludeObjectSchema } from './objects/TotpMfaInclude.schema';
import { TotpMfaUpdateInputObjectSchema as TotpMfaUpdateInputObjectSchema } from './objects/TotpMfaUpdateInput.schema';
import { TotpMfaUncheckedUpdateInputObjectSchema as TotpMfaUncheckedUpdateInputObjectSchema } from './objects/TotpMfaUncheckedUpdateInput.schema';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './objects/TotpMfaWhereUniqueInput.schema';

export const TotpMfaUpdateOneSchema: z.ZodType<Prisma.TotpMfaUpdateArgs> = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), data: z.union([TotpMfaUpdateInputObjectSchema, TotpMfaUncheckedUpdateInputObjectSchema]), where: TotpMfaWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TotpMfaUpdateArgs>;

export const TotpMfaUpdateOneZodSchema = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), data: z.union([TotpMfaUpdateInputObjectSchema, TotpMfaUncheckedUpdateInputObjectSchema]), where: TotpMfaWhereUniqueInputObjectSchema }).strict();