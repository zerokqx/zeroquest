import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistorySelectObjectSchema as WalletHistorySelectObjectSchema } from './objects/WalletHistorySelect.schema';
import { WalletHistoryUpdateManyMutationInputObjectSchema as WalletHistoryUpdateManyMutationInputObjectSchema } from './objects/WalletHistoryUpdateManyMutationInput.schema';
import { WalletHistoryWhereInputObjectSchema as WalletHistoryWhereInputObjectSchema } from './objects/WalletHistoryWhereInput.schema';

export const WalletHistoryUpdateManyAndReturnSchema: z.ZodType<Prisma.WalletHistoryUpdateManyAndReturnArgs> = z.object({ select: WalletHistorySelectObjectSchema.optional(), data: WalletHistoryUpdateManyMutationInputObjectSchema, where: WalletHistoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WalletHistoryUpdateManyAndReturnArgs>;

export const WalletHistoryUpdateManyAndReturnZodSchema = z.object({ select: WalletHistorySelectObjectSchema.optional(), data: WalletHistoryUpdateManyMutationInputObjectSchema, where: WalletHistoryWhereInputObjectSchema.optional() }).strict();