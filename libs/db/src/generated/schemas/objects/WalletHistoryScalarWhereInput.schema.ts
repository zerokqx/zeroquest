import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumWalletHistoryTypeFilterObjectSchema as EnumWalletHistoryTypeFilterObjectSchema } from './EnumWalletHistoryTypeFilter.schema';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const wallethistoryscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WalletHistoryScalarWhereInputObjectSchema), z.lazy(() => WalletHistoryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WalletHistoryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WalletHistoryScalarWhereInputObjectSchema), z.lazy(() => WalletHistoryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  amount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  balance: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => EnumWalletHistoryTypeFilterObjectSchema), WalletHistoryTypeSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  walletId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const WalletHistoryScalarWhereInputObjectSchema: z.ZodType<Prisma.WalletHistoryScalarWhereInput> = wallethistoryscalarwhereinputSchema as unknown as z.ZodType<Prisma.WalletHistoryScalarWhereInput>;
export const WalletHistoryScalarWhereInputObjectZodSchema = wallethistoryscalarwhereinputSchema;
