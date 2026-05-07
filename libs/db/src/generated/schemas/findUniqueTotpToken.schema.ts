import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenSelectObjectSchema as TotpTokenSelectObjectSchema } from './objects/TotpTokenSelect.schema';
import { TotpTokenIncludeObjectSchema as TotpTokenIncludeObjectSchema } from './objects/TotpTokenInclude.schema';
import { TotpTokenWhereUniqueInputObjectSchema as TotpTokenWhereUniqueInputObjectSchema } from './objects/TotpTokenWhereUniqueInput.schema';

export const TotpTokenFindUniqueSchema: z.ZodType<Prisma.TotpTokenFindUniqueArgs> = z.object({ select: TotpTokenSelectObjectSchema.optional(), include: TotpTokenIncludeObjectSchema.optional(), where: TotpTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TotpTokenFindUniqueArgs>;

export const TotpTokenFindUniqueZodSchema = z.object({ select: TotpTokenSelectObjectSchema.optional(), include: TotpTokenIncludeObjectSchema.optional(), where: TotpTokenWhereUniqueInputObjectSchema }).strict();