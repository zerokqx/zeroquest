import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenUpdateManyMutationInputObjectSchema as TotpTokenUpdateManyMutationInputObjectSchema } from './objects/TotpTokenUpdateManyMutationInput.schema';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './objects/TotpTokenWhereInput.schema';

export const TotpTokenUpdateManySchema: z.ZodType<Prisma.TotpTokenUpdateManyArgs> = z.object({ data: TotpTokenUpdateManyMutationInputObjectSchema, where: TotpTokenWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TotpTokenUpdateManyArgs>;

export const TotpTokenUpdateManyZodSchema = z.object({ data: TotpTokenUpdateManyMutationInputObjectSchema, where: TotpTokenWhereInputObjectSchema.optional() }).strict();