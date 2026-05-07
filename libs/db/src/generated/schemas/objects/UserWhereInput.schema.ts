import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumUserRoleFilterObjectSchema as EnumUserRoleFilterObjectSchema } from './EnumUserRoleFilter.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { SubscribeListRelationFilterObjectSchema as SubscribeListRelationFilterObjectSchema } from './SubscribeListRelationFilter.schema';
import { PaymentListRelationFilterObjectSchema as PaymentListRelationFilterObjectSchema } from './PaymentListRelationFilter.schema';
import { ReviewNullableScalarRelationFilterObjectSchema as ReviewNullableScalarRelationFilterObjectSchema } from './ReviewNullableScalarRelationFilter.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema';
import { WalletScalarRelationFilterObjectSchema as WalletScalarRelationFilterObjectSchema } from './WalletScalarRelationFilter.schema';
import { WalletWhereInputObjectSchema as WalletWhereInputObjectSchema } from './WalletWhereInput.schema';
import { LegalAcceptancesListRelationFilterObjectSchema as LegalAcceptancesListRelationFilterObjectSchema } from './LegalAcceptancesListRelationFilter.schema';
import { TotpTokenNullableScalarRelationFilterObjectSchema as TotpTokenNullableScalarRelationFilterObjectSchema } from './TotpTokenNullableScalarRelationFilter.schema';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './TotpTokenWhereInput.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  login: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  telegramId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  passwordHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isBanned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  role: z.union([z.lazy(() => EnumUserRoleFilterObjectSchema), UserRoleSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  canComment: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  walletId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  subscribes: z.lazy(() => SubscribeListRelationFilterObjectSchema).optional(),
  payments: z.lazy(() => PaymentListRelationFilterObjectSchema).optional(),
  review: z.union([z.lazy(() => ReviewNullableScalarRelationFilterObjectSchema), z.lazy(() => ReviewWhereInputObjectSchema)]).optional(),
  wallet: z.union([z.lazy(() => WalletScalarRelationFilterObjectSchema), z.lazy(() => WalletWhereInputObjectSchema)]).optional(),
  legalAcceptances: z.lazy(() => LegalAcceptancesListRelationFilterObjectSchema).optional(),
  totp: z.union([z.lazy(() => TotpTokenNullableScalarRelationFilterObjectSchema), z.lazy(() => TotpTokenWhereInputObjectSchema)]).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
