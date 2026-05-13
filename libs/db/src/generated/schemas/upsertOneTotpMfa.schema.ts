import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaSelectObjectSchema as TotpMfaSelectObjectSchema } from './objects/TotpMfaSelect.schema';
import { TotpMfaIncludeObjectSchema as TotpMfaIncludeObjectSchema } from './objects/TotpMfaInclude.schema';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './objects/TotpMfaWhereUniqueInput.schema';
import { TotpMfaCreateInputObjectSchema as TotpMfaCreateInputObjectSchema } from './objects/TotpMfaCreateInput.schema';
import { TotpMfaUncheckedCreateInputObjectSchema as TotpMfaUncheckedCreateInputObjectSchema } from './objects/TotpMfaUncheckedCreateInput.schema';
import { TotpMfaUpdateInputObjectSchema as TotpMfaUpdateInputObjectSchema } from './objects/TotpMfaUpdateInput.schema';
import { TotpMfaUncheckedUpdateInputObjectSchema as TotpMfaUncheckedUpdateInputObjectSchema } from './objects/TotpMfaUncheckedUpdateInput.schema';

export const TotpMfaUpsertOneSchema: z.ZodType<Prisma.TotpMfaUpsertArgs> = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), where: TotpMfaWhereUniqueInputObjectSchema, create: z.union([ TotpMfaCreateInputObjectSchema, TotpMfaUncheckedCreateInputObjectSchema ]), update: z.union([ TotpMfaUpdateInputObjectSchema, TotpMfaUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TotpMfaUpsertArgs>;

export const TotpMfaUpsertOneZodSchema = z.object({ select: TotpMfaSelectObjectSchema.optional(), include: TotpMfaIncludeObjectSchema.optional(), where: TotpMfaWhereUniqueInputObjectSchema, create: z.union([ TotpMfaCreateInputObjectSchema, TotpMfaUncheckedCreateInputObjectSchema ]), update: z.union([ TotpMfaUpdateInputObjectSchema, TotpMfaUncheckedUpdateInputObjectSchema ]) }).strict();