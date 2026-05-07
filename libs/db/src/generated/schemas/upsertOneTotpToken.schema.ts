import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenSelectObjectSchema as TotpTokenSelectObjectSchema } from './objects/TotpTokenSelect.schema';
import { TotpTokenIncludeObjectSchema as TotpTokenIncludeObjectSchema } from './objects/TotpTokenInclude.schema';
import { TotpTokenWhereUniqueInputObjectSchema as TotpTokenWhereUniqueInputObjectSchema } from './objects/TotpTokenWhereUniqueInput.schema';
import { TotpTokenCreateInputObjectSchema as TotpTokenCreateInputObjectSchema } from './objects/TotpTokenCreateInput.schema';
import { TotpTokenUncheckedCreateInputObjectSchema as TotpTokenUncheckedCreateInputObjectSchema } from './objects/TotpTokenUncheckedCreateInput.schema';
import { TotpTokenUpdateInputObjectSchema as TotpTokenUpdateInputObjectSchema } from './objects/TotpTokenUpdateInput.schema';
import { TotpTokenUncheckedUpdateInputObjectSchema as TotpTokenUncheckedUpdateInputObjectSchema } from './objects/TotpTokenUncheckedUpdateInput.schema';

export const TotpTokenUpsertOneSchema: z.ZodType<Prisma.TotpTokenUpsertArgs> = z.object({ select: TotpTokenSelectObjectSchema.optional(), include: TotpTokenIncludeObjectSchema.optional(), where: TotpTokenWhereUniqueInputObjectSchema, create: z.union([ TotpTokenCreateInputObjectSchema, TotpTokenUncheckedCreateInputObjectSchema ]), update: z.union([ TotpTokenUpdateInputObjectSchema, TotpTokenUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TotpTokenUpsertArgs>;

export const TotpTokenUpsertOneZodSchema = z.object({ select: TotpTokenSelectObjectSchema.optional(), include: TotpTokenIncludeObjectSchema.optional(), where: TotpTokenWhereUniqueInputObjectSchema, create: z.union([ TotpTokenCreateInputObjectSchema, TotpTokenUncheckedCreateInputObjectSchema ]), update: z.union([ TotpTokenUpdateInputObjectSchema, TotpTokenUncheckedUpdateInputObjectSchema ]) }).strict();