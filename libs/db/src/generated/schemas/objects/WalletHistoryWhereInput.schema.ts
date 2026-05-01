import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumWalletHistoryTypeFilterObjectSchema as EnumWalletHistoryTypeFilterObjectSchema } from './EnumWalletHistoryTypeFilter.schema';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WalletScalarRelationFilterObjectSchema as WalletScalarRelationFilterObjectSchema } from './WalletScalarRelationFilter.schema';
import { WalletWhereInputObjectSchema as WalletWhereInputObjectSchema } from './WalletWhereInput.schema'

const wallethistorywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WalletHistoryWhereInputObjectSchema), z.lazy(() => WalletHistoryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WalletHistoryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WalletHistoryWhereInputObjectSchema), z.lazy(() => WalletHistoryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  amount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  balance: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => EnumWalletHistoryTypeFilterObjectSchema), WalletHistoryTypeSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  walletId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  wallet: z.union([z.lazy(() => WalletScalarRelationFilterObjectSchema), z.lazy(() => WalletWhereInputObjectSchema)]).optional()
}).strict();
export const WalletHistoryWhereInputObjectSchema: z.ZodType<Prisma.WalletHistoryWhereInput> = wallethistorywhereinputSchema as unknown as z.ZodType<Prisma.WalletHistoryWhereInput>;
export const WalletHistoryWhereInputObjectZodSchema = wallethistorywhereinputSchema;
