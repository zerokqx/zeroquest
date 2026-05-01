import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistorySelectObjectSchema as WalletHistorySelectObjectSchema } from './objects/WalletHistorySelect.schema';
import { WalletHistoryIncludeObjectSchema as WalletHistoryIncludeObjectSchema } from './objects/WalletHistoryInclude.schema';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './objects/WalletHistoryWhereUniqueInput.schema';

export const WalletHistoryFindUniqueSchema: z.ZodType<Prisma.WalletHistoryFindUniqueArgs> = z.object({ select: WalletHistorySelectObjectSchema.optional(), include: WalletHistoryIncludeObjectSchema.optional(), where: WalletHistoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WalletHistoryFindUniqueArgs>;

export const WalletHistoryFindUniqueZodSchema = z.object({ select: WalletHistorySelectObjectSchema.optional(), include: WalletHistoryIncludeObjectSchema.optional(), where: WalletHistoryWhereUniqueInputObjectSchema }).strict();