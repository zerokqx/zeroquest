import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { WalletHistoryListRelationFilterObjectSchema as WalletHistoryListRelationFilterObjectSchema } from './WalletHistoryListRelationFilter.schema'

const walletwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WalletWhereInputObjectSchema), z.lazy(() => WalletWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WalletWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WalletWhereInputObjectSchema), z.lazy(() => WalletWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  held: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  balance: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  walletHistories: z.lazy(() => WalletHistoryListRelationFilterObjectSchema).optional()
}).strict();
export const WalletWhereInputObjectSchema: z.ZodType<Prisma.WalletWhereInput> = walletwhereinputSchema as unknown as z.ZodType<Prisma.WalletWhereInput>;
export const WalletWhereInputObjectZodSchema = walletwhereinputSchema;
