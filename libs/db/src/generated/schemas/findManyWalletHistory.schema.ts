import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletHistoryIncludeObjectSchema as WalletHistoryIncludeObjectSchema } from './objects/WalletHistoryInclude.schema';
import { WalletHistoryOrderByWithRelationInputObjectSchema as WalletHistoryOrderByWithRelationInputObjectSchema } from './objects/WalletHistoryOrderByWithRelationInput.schema';
import { WalletHistoryWhereInputObjectSchema as WalletHistoryWhereInputObjectSchema } from './objects/WalletHistoryWhereInput.schema';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './objects/WalletHistoryWhereUniqueInput.schema';
import { WalletHistoryScalarFieldEnumSchema } from './enums/WalletHistoryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WalletHistoryFindManySelectSchema: z.ZodType<Prisma.WalletHistorySelect> = z.object({
    id: z.boolean().optional(),
    amount: z.boolean().optional(),
    balance: z.boolean().optional(),
    type: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    walletId: z.boolean().optional(),
    wallet: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WalletHistorySelect>;

export const WalletHistoryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    amount: z.boolean().optional(),
    balance: z.boolean().optional(),
    type: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    walletId: z.boolean().optional(),
    wallet: z.boolean().optional()
  }).strict();

export const WalletHistoryFindManySchema: z.ZodType<Prisma.WalletHistoryFindManyArgs> = z.object({ select: WalletHistoryFindManySelectSchema.optional(), include: z.lazy(() => WalletHistoryIncludeObjectSchema.optional()), orderBy: z.union([WalletHistoryOrderByWithRelationInputObjectSchema, WalletHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WalletHistoryWhereInputObjectSchema.optional(), cursor: WalletHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WalletHistoryScalarFieldEnumSchema, WalletHistoryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WalletHistoryFindManyArgs>;

export const WalletHistoryFindManyZodSchema = z.object({ select: WalletHistoryFindManySelectSchema.optional(), include: z.lazy(() => WalletHistoryIncludeObjectSchema.optional()), orderBy: z.union([WalletHistoryOrderByWithRelationInputObjectSchema, WalletHistoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: WalletHistoryWhereInputObjectSchema.optional(), cursor: WalletHistoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WalletHistoryScalarFieldEnumSchema, WalletHistoryScalarFieldEnumSchema.array()]).optional() }).strict();