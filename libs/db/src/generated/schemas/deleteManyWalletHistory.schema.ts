import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistoryWhereInputObjectSchema as WalletHistoryWhereInputObjectSchema } from './objects/WalletHistoryWhereInput.schema';

export const WalletHistoryDeleteManySchema: z.ZodType<Prisma.WalletHistoryDeleteManyArgs> = z.object({ where: WalletHistoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WalletHistoryDeleteManyArgs>;

export const WalletHistoryDeleteManyZodSchema = z.object({ where: WalletHistoryWhereInputObjectSchema.optional() }).strict();