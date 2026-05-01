import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletSelectObjectSchema as WalletSelectObjectSchema } from './objects/WalletSelect.schema';
import { WalletIncludeObjectSchema as WalletIncludeObjectSchema } from './objects/WalletInclude.schema';
import { WalletWhereUniqueInputObjectSchema as WalletWhereUniqueInputObjectSchema } from './objects/WalletWhereUniqueInput.schema';

export const WalletDeleteOneSchema: z.ZodType<Prisma.WalletDeleteArgs> = z.object({ select: WalletSelectObjectSchema.optional(), include: WalletIncludeObjectSchema.optional(), where: WalletWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WalletDeleteArgs>;

export const WalletDeleteOneZodSchema = z.object({ select: WalletSelectObjectSchema.optional(), include: WalletIncludeObjectSchema.optional(), where: WalletWhereUniqueInputObjectSchema }).strict();