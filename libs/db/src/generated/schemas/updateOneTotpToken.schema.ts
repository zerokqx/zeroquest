import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenSelectObjectSchema as TotpTokenSelectObjectSchema } from './objects/TotpTokenSelect.schema';
import { TotpTokenIncludeObjectSchema as TotpTokenIncludeObjectSchema } from './objects/TotpTokenInclude.schema';
import { TotpTokenUpdateInputObjectSchema as TotpTokenUpdateInputObjectSchema } from './objects/TotpTokenUpdateInput.schema';
import { TotpTokenUncheckedUpdateInputObjectSchema as TotpTokenUncheckedUpdateInputObjectSchema } from './objects/TotpTokenUncheckedUpdateInput.schema';
import { TotpTokenWhereUniqueInputObjectSchema as TotpTokenWhereUniqueInputObjectSchema } from './objects/TotpTokenWhereUniqueInput.schema';

export const TotpTokenUpdateOneSchema: z.ZodType<Prisma.TotpTokenUpdateArgs> = z.object({ select: TotpTokenSelectObjectSchema.optional(), include: TotpTokenIncludeObjectSchema.optional(), data: z.union([TotpTokenUpdateInputObjectSchema, TotpTokenUncheckedUpdateInputObjectSchema]), where: TotpTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TotpTokenUpdateArgs>;

export const TotpTokenUpdateOneZodSchema = z.object({ select: TotpTokenSelectObjectSchema.optional(), include: TotpTokenIncludeObjectSchema.optional(), data: z.union([TotpTokenUpdateInputObjectSchema, TotpTokenUncheckedUpdateInputObjectSchema]), where: TotpTokenWhereUniqueInputObjectSchema }).strict();