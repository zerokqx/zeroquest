import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenSelectObjectSchema as TotpTokenSelectObjectSchema } from './objects/TotpTokenSelect.schema';
import { TotpTokenUpdateManyMutationInputObjectSchema as TotpTokenUpdateManyMutationInputObjectSchema } from './objects/TotpTokenUpdateManyMutationInput.schema';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './objects/TotpTokenWhereInput.schema';

export const TotpTokenUpdateManyAndReturnSchema: z.ZodType<Prisma.TotpTokenUpdateManyAndReturnArgs> = z.object({ select: TotpTokenSelectObjectSchema.optional(), data: TotpTokenUpdateManyMutationInputObjectSchema, where: TotpTokenWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TotpTokenUpdateManyAndReturnArgs>;

export const TotpTokenUpdateManyAndReturnZodSchema = z.object({ select: TotpTokenSelectObjectSchema.optional(), data: TotpTokenUpdateManyMutationInputObjectSchema, where: TotpTokenWhereInputObjectSchema.optional() }).strict();