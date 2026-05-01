import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistorySelectObjectSchema as WalletHistorySelectObjectSchema } from './objects/WalletHistorySelect.schema';
import { WalletHistoryIncludeObjectSchema as WalletHistoryIncludeObjectSchema } from './objects/WalletHistoryInclude.schema';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './objects/WalletHistoryWhereUniqueInput.schema';

export const WalletHistoryDeleteOneSchema: z.ZodType<Prisma.WalletHistoryDeleteArgs> = z.object({ select: WalletHistorySelectObjectSchema.optional(), include: WalletHistoryIncludeObjectSchema.optional(), where: WalletHistoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WalletHistoryDeleteArgs>;

export const WalletHistoryDeleteOneZodSchema = z.object({ select: WalletHistorySelectObjectSchema.optional(), include: WalletHistoryIncludeObjectSchema.optional(), where: WalletHistoryWhereUniqueInputObjectSchema }).strict();