import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistoryCreateManyInputObjectSchema as WalletHistoryCreateManyInputObjectSchema } from './objects/WalletHistoryCreateManyInput.schema';

export const WalletHistoryCreateManySchema: z.ZodType<Prisma.WalletHistoryCreateManyArgs> = z.object({ data: z.union([ WalletHistoryCreateManyInputObjectSchema, z.array(WalletHistoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WalletHistoryCreateManyArgs>;

export const WalletHistoryCreateManyZodSchema = z.object({ data: z.union([ WalletHistoryCreateManyInputObjectSchema, z.array(WalletHistoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();