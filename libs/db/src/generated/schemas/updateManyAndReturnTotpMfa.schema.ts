import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaSelectObjectSchema as TotpMfaSelectObjectSchema } from './objects/TotpMfaSelect.schema';
import { TotpMfaUpdateManyMutationInputObjectSchema as TotpMfaUpdateManyMutationInputObjectSchema } from './objects/TotpMfaUpdateManyMutationInput.schema';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './objects/TotpMfaWhereInput.schema';

export const TotpMfaUpdateManyAndReturnSchema: z.ZodType<Prisma.TotpMfaUpdateManyAndReturnArgs> = z.object({ select: TotpMfaSelectObjectSchema.optional(), data: TotpMfaUpdateManyMutationInputObjectSchema, where: TotpMfaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TotpMfaUpdateManyAndReturnArgs>;

export const TotpMfaUpdateManyAndReturnZodSchema = z.object({ select: TotpMfaSelectObjectSchema.optional(), data: TotpMfaUpdateManyMutationInputObjectSchema, where: TotpMfaWhereInputObjectSchema.optional() }).strict();