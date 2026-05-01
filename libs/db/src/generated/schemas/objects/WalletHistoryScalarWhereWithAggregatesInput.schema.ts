import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumWalletHistoryTypeWithAggregatesFilterObjectSchema as EnumWalletHistoryTypeWithAggregatesFilterObjectSchema } from './EnumWalletHistoryTypeWithAggregatesFilter.schema';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const wallethistoryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WalletHistoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WalletHistoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WalletHistoryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WalletHistoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WalletHistoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  amount: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  balance: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => EnumWalletHistoryTypeWithAggregatesFilterObjectSchema), WalletHistoryTypeSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  walletId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const WalletHistoryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WalletHistoryScalarWhereWithAggregatesInput> = wallethistoryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WalletHistoryScalarWhereWithAggregatesInput>;
export const WalletHistoryScalarWhereWithAggregatesInputObjectZodSchema = wallethistoryscalarwherewithaggregatesinputSchema;
