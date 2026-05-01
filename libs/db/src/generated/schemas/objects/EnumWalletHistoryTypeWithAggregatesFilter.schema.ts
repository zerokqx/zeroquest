import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema';
import { NestedEnumWalletHistoryTypeWithAggregatesFilterObjectSchema as NestedEnumWalletHistoryTypeWithAggregatesFilterObjectSchema } from './NestedEnumWalletHistoryTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumWalletHistoryTypeFilterObjectSchema as NestedEnumWalletHistoryTypeFilterObjectSchema } from './NestedEnumWalletHistoryTypeFilter.schema'

const makeSchema = () => z.object({
  equals: WalletHistoryTypeSchema.optional(),
  in: WalletHistoryTypeSchema.array().optional(),
  notIn: WalletHistoryTypeSchema.array().optional(),
  not: z.union([WalletHistoryTypeSchema, z.lazy(() => NestedEnumWalletHistoryTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumWalletHistoryTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumWalletHistoryTypeFilterObjectSchema).optional()
}).strict();
export const EnumWalletHistoryTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumWalletHistoryTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumWalletHistoryTypeWithAggregatesFilter>;
export const EnumWalletHistoryTypeWithAggregatesFilterObjectZodSchema = makeSchema();
