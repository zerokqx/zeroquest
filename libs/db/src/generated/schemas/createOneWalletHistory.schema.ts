import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistorySelectObjectSchema as WalletHistorySelectObjectSchema } from './objects/WalletHistorySelect.schema';
import { WalletHistoryIncludeObjectSchema as WalletHistoryIncludeObjectSchema } from './objects/WalletHistoryInclude.schema';
import { WalletHistoryCreateInputObjectSchema as WalletHistoryCreateInputObjectSchema } from './objects/WalletHistoryCreateInput.schema';
import { WalletHistoryUncheckedCreateInputObjectSchema as WalletHistoryUncheckedCreateInputObjectSchema } from './objects/WalletHistoryUncheckedCreateInput.schema';

export const WalletHistoryCreateOneSchema: z.ZodType<Prisma.WalletHistoryCreateArgs> = z.object({ select: WalletHistorySelectObjectSchema.optional(), include: WalletHistoryIncludeObjectSchema.optional(), data: z.union([WalletHistoryCreateInputObjectSchema, WalletHistoryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WalletHistoryCreateArgs>;

export const WalletHistoryCreateOneZodSchema = z.object({ select: WalletHistorySelectObjectSchema.optional(), include: WalletHistoryIncludeObjectSchema.optional(), data: z.union([WalletHistoryCreateInputObjectSchema, WalletHistoryUncheckedCreateInputObjectSchema]) }).strict();