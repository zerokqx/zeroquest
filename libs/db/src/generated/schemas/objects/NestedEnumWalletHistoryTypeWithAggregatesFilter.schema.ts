import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumWalletHistoryTypeFilterObjectSchema as NestedEnumWalletHistoryTypeFilterObjectSchema } from './NestedEnumWalletHistoryTypeFilter.schema'

const nestedenumwallethistorytypewithaggregatesfilterSchema = z.object({
  equals: WalletHistoryTypeSchema.optional(),
  in: WalletHistoryTypeSchema.array().optional(),
  notIn: WalletHistoryTypeSchema.array().optional(),
  not: z.union([WalletHistoryTypeSchema, z.lazy(() => NestedEnumWalletHistoryTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumWalletHistoryTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumWalletHistoryTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumWalletHistoryTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumWalletHistoryTypeWithAggregatesFilter> = nestedenumwallethistorytypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumWalletHistoryTypeWithAggregatesFilter>;
export const NestedEnumWalletHistoryTypeWithAggregatesFilterObjectZodSchema = nestedenumwallethistorytypewithaggregatesfilterSchema;
