import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistoryOrderByWithRelationInputObjectSchema as WalletHistoryOrderByWithRelationInputObjectSchema } from './objects/WalletHistoryOrderByWithRelationInput.schema';
import { WalletHistoryWhereInputObjectSchema as WalletHistoryWhereInputObjectSchema } from './objects/WalletHistoryWhereInput.schema';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './objects/WalletHistoryWhereUniqueInput.schema';
import { WalletHistoryCountAggregateInputObjectSchema as WalletHistoryCountAggregateInputObjectSchema } from './objects/WalletHistoryCountAggregateInput.schema';

export const WalletHistoryCountSchema: z.ZodType<Prisma.WalletHistoryCountArgs> = z.object({ orderBy: z.union([WalletHistoryOrderByWithRelationInputObjectSchema, WalletHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WalletHistoryWhereInputObjectSchema.optional(), cursor: WalletHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WalletHistoryCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WalletHistoryCountArgs>;

export const WalletHistoryCountZodSchema = z.object({ orderBy: z.union([WalletHistoryOrderByWithRelationInputObjectSchema, WalletHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WalletHistoryWhereInputObjectSchema.optional(), cursor: WalletHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WalletHistoryCountAggregateInputObjectSchema ]).optional() }).strict();