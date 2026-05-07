import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenSelectObjectSchema as TotpTokenSelectObjectSchema } from './objects/TotpTokenSelect.schema';
import { TotpTokenIncludeObjectSchema as TotpTokenIncludeObjectSchema } from './objects/TotpTokenInclude.schema';
import { TotpTokenCreateInputObjectSchema as TotpTokenCreateInputObjectSchema } from './objects/TotpTokenCreateInput.schema';
import { TotpTokenUncheckedCreateInputObjectSchema as TotpTokenUncheckedCreateInputObjectSchema } from './objects/TotpTokenUncheckedCreateInput.schema';

export const TotpTokenCreateOneSchema: z.ZodType<Prisma.TotpTokenCreateArgs> = z.object({ select: TotpTokenSelectObjectSchema.optional(), include: TotpTokenIncludeObjectSchema.optional(), data: z.union([TotpTokenCreateInputObjectSchema, TotpTokenUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TotpTokenCreateArgs>;

export const TotpTokenCreateOneZodSchema = z.object({ select: TotpTokenSelectObjectSchema.optional(), include: TotpTokenIncludeObjectSchema.optional(), data: z.union([TotpTokenCreateInputObjectSchema, TotpTokenUncheckedCreateInputObjectSchema]) }).strict();