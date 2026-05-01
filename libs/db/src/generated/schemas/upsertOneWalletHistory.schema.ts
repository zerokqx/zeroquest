import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistorySelectObjectSchema as WalletHistorySelectObjectSchema } from './objects/WalletHistorySelect.schema';
import { WalletHistoryIncludeObjectSchema as WalletHistoryIncludeObjectSchema } from './objects/WalletHistoryInclude.schema';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './objects/WalletHistoryWhereUniqueInput.schema';
import { WalletHistoryCreateInputObjectSchema as WalletHistoryCreateInputObjectSchema } from './objects/WalletHistoryCreateInput.schema';
import { WalletHistoryUncheckedCreateInputObjectSchema as WalletHistoryUncheckedCreateInputObjectSchema } from './objects/WalletHistoryUncheckedCreateInput.schema';
import { WalletHistoryUpdateInputObjectSchema as WalletHistoryUpdateInputObjectSchema } from './objects/WalletHistoryUpdateInput.schema';
import { WalletHistoryUncheckedUpdateInputObjectSchema as WalletHistoryUncheckedUpdateInputObjectSchema } from './objects/WalletHistoryUncheckedUpdateInput.schema';

export const WalletHistoryUpsertOneSchema: z.ZodType<Prisma.WalletHistoryUpsertArgs> = z.object({ select: WalletHistorySelectObjectSchema.optional(), include: WalletHistoryIncludeObjectSchema.optional(), where: WalletHistoryWhereUniqueInputObjectSchema, create: z.union([ WalletHistoryCreateInputObjectSchema, WalletHistoryUncheckedCreateInputObjectSchema ]), update: z.union([ WalletHistoryUpdateInputObjectSchema, WalletHistoryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WalletHistoryUpsertArgs>;

export const WalletHistoryUpsertOneZodSchema = z.object({ select: WalletHistorySelectObjectSchema.optional(), include: WalletHistoryIncludeObjectSchema.optional(), where: WalletHistoryWhereUniqueInputObjectSchema, create: z.union([ WalletHistoryCreateInputObjectSchema, WalletHistoryUncheckedCreateInputObjectSchema ]), update: z.union([ WalletHistoryUpdateInputObjectSchema, WalletHistoryUncheckedUpdateInputObjectSchema ]) }).strict();