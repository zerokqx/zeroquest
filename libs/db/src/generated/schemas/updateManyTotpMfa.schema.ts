import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaUpdateManyMutationInputObjectSchema as TotpMfaUpdateManyMutationInputObjectSchema } from './objects/TotpMfaUpdateManyMutationInput.schema';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './objects/TotpMfaWhereInput.schema';

export const TotpMfaUpdateManySchema: z.ZodType<Prisma.TotpMfaUpdateManyArgs> = z.object({ data: TotpMfaUpdateManyMutationInputObjectSchema, where: TotpMfaWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TotpMfaUpdateManyArgs>;

export const TotpMfaUpdateManyZodSchema = z.object({ data: TotpMfaUpdateManyMutationInputObjectSchema, where: TotpMfaWhereInputObjectSchema.optional() }).strict();