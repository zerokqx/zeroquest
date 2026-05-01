import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistoryUpdateManyMutationInputObjectSchema as WalletHistoryUpdateManyMutationInputObjectSchema } from './objects/WalletHistoryUpdateManyMutationInput.schema';
import { WalletHistoryWhereInputObjectSchema as WalletHistoryWhereInputObjectSchema } from './objects/WalletHistoryWhereInput.schema';

export const WalletHistoryUpdateManySchema: z.ZodType<Prisma.WalletHistoryUpdateManyArgs> = z.object({ data: WalletHistoryUpdateManyMutationInputObjectSchema, where: WalletHistoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WalletHistoryUpdateManyArgs>;

export const WalletHistoryUpdateManyZodSchema = z.object({ data: WalletHistoryUpdateManyMutationInputObjectSchema, where: WalletHistoryWhereInputObjectSchema.optional() }).strict();