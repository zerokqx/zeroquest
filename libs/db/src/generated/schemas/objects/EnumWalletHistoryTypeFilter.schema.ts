import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema';
import { NestedEnumWalletHistoryTypeFilterObjectSchema as NestedEnumWalletHistoryTypeFilterObjectSchema } from './NestedEnumWalletHistoryTypeFilter.schema'

const makeSchema = () => z.object({
  equals: WalletHistoryTypeSchema.optional(),
  in: WalletHistoryTypeSchema.array().optional(),
  notIn: WalletHistoryTypeSchema.array().optional(),
  not: z.union([WalletHistoryTypeSchema, z.lazy(() => NestedEnumWalletHistoryTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumWalletHistoryTypeFilterObjectSchema: z.ZodType<Prisma.EnumWalletHistoryTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumWalletHistoryTypeFilter>;
export const EnumWalletHistoryTypeFilterObjectZodSchema = makeSchema();
