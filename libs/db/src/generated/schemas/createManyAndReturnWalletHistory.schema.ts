import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistorySelectObjectSchema as WalletHistorySelectObjectSchema } from './objects/WalletHistorySelect.schema';
import { WalletHistoryCreateManyInputObjectSchema as WalletHistoryCreateManyInputObjectSchema } from './objects/WalletHistoryCreateManyInput.schema';

export const WalletHistoryCreateManyAndReturnSchema: z.ZodType<Prisma.WalletHistoryCreateManyAndReturnArgs> = z.object({ select: WalletHistorySelectObjectSchema.optional(), data: z.union([ WalletHistoryCreateManyInputObjectSchema, z.array(WalletHistoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WalletHistoryCreateManyAndReturnArgs>;

export const WalletHistoryCreateManyAndReturnZodSchema = z.object({ select: WalletHistorySelectObjectSchema.optional(), data: z.union([ WalletHistoryCreateManyInputObjectSchema, z.array(WalletHistoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();