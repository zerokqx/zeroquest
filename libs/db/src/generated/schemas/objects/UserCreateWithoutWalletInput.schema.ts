import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { SubscribeCreateNestedManyWithoutUserInputObjectSchema as SubscribeCreateNestedManyWithoutUserInputObjectSchema } from './SubscribeCreateNestedManyWithoutUserInput.schema';
import { PaymentCreateNestedManyWithoutUserInputObjectSchema as PaymentCreateNestedManyWithoutUserInputObjectSchema } from './PaymentCreateNestedManyWithoutUserInput.schema';
import { ReviewCreateNestedOneWithoutUserInputObjectSchema as ReviewCreateNestedOneWithoutUserInputObjectSchema } from './ReviewCreateNestedOneWithoutUserInput.schema';
import { LegalAcceptancesCreateNestedManyWithoutUserInputObjectSchema as LegalAcceptancesCreateNestedManyWithoutUserInputObjectSchema } from './LegalAcceptancesCreateNestedManyWithoutUserInput.schema';
import { TotpTokenCreateNestedOneWithoutUserInputObjectSchema as TotpTokenCreateNestedOneWithoutUserInputObjectSchema } from './TotpTokenCreateNestedOneWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  login: z.string(),
  telegramId: z.number().int().optional().nullable(),
  passwordHash: z.string(),
  isBanned: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  canComment: z.boolean().optional(),
  subscribes: z.lazy(() => SubscribeCreateNestedManyWithoutUserInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentCreateNestedManyWithoutUserInputObjectSchema).optional(),
  review: z.lazy(() => ReviewCreateNestedOneWithoutUserInputObjectSchema).optional(),
  legalAcceptances: z.lazy(() => LegalAcceptancesCreateNestedManyWithoutUserInputObjectSchema).optional(),
  totp: z.lazy(() => TotpTokenCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutWalletInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutWalletInput>;
export const UserCreateWithoutWalletInputObjectZodSchema = makeSchema();
