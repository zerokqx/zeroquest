import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistorySelectObjectSchema as WalletHistorySelectObjectSchema } from './objects/WalletHistorySelect.schema';
import { WalletHistoryIncludeObjectSchema as WalletHistoryIncludeObjectSchema } from './objects/WalletHistoryInclude.schema';
import { WalletHistoryUpdateInputObjectSchema as WalletHistoryUpdateInputObjectSchema } from './objects/WalletHistoryUpdateInput.schema';
import { WalletHistoryUncheckedUpdateInputObjectSchema as WalletHistoryUncheckedUpdateInputObjectSchema } from './objects/WalletHistoryUncheckedUpdateInput.schema';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './objects/WalletHistoryWhereUniqueInput.schema';

export const WalletHistoryUpdateOneSchema: z.ZodType<Prisma.WalletHistoryUpdateArgs> = z.object({ select: WalletHistorySelectObjectSchema.optional(), include: WalletHistoryIncludeObjectSchema.optional(), data: z.union([WalletHistoryUpdateInputObjectSchema, WalletHistoryUncheckedUpdateInputObjectSchema]), where: WalletHistoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WalletHistoryUpdateArgs>;

export const WalletHistoryUpdateOneZodSchema = z.object({ select: WalletHistorySelectObjectSchema.optional(), include: WalletHistoryIncludeObjectSchema.optional(), data: z.union([WalletHistoryUpdateInputObjectSchema, WalletHistoryUncheckedUpdateInputObjectSchema]), where: WalletHistoryWhereUniqueInputObjectSchema }).strict();