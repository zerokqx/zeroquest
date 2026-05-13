import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaSelectObjectSchema as TotpMfaSelectObjectSchema } from './objects/TotpMfaSelect.schema';
import { TotpMfaIncludeObjectSchema as TotpMfaIncludeObjectSchema } from './objects/TotpMfaInclude.schema';
import { TotpMfaCreateInputObjectSchema as TotpMfaCreateInputObjectSchema } from './objects/TotpMfaCreateInput.schema';
import { TotpMfaUncheckedCreateInputObjectSchema as TotpMfaUncheckedCreateInputObjectSchema } from './objects/TotpMfaUncheckedCreateInput.schema';

export const TotpMfaCreateOneSchema: z.ZodType<Prisma.TotpMfaCreateArgs> = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), data: z.union([TotpMfaCreateInputObjectSchema, TotpMfaUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TotpMfaCreateArgs>;

export const TotpMfaCreateOneZodSchema = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), data: z.union([TotpMfaCreateInputObjectSchema, TotpMfaUncheckedCreateInputObjectSchema]) }).strict();