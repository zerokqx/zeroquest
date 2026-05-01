import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema'

const nestedenumwallethistorytypefilterSchema = z.object({
  equals: WalletHistoryTypeSchema.optional(),
  in: WalletHistoryTypeSchema.array().optional(),
  notIn: WalletHistoryTypeSchema.array().optional(),
  not: z.union([WalletHistoryTypeSchema, z.lazy(() => NestedEnumWalletHistoryTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumWalletHistoryTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumWalletHistoryTypeFilter> = nestedenumwallethistorytypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumWalletHistoryTypeFilter>;
export const NestedEnumWalletHistoryTypeFilterObjectZodSchema = nestedenumwallethistorytypefilterSchema;
