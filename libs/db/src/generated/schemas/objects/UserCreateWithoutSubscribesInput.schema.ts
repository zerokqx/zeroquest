import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { PaymentCreateNestedManyWithoutUserInputObjectSchema as PaymentCreateNestedManyWithoutUserInputObjectSchema } from './PaymentCreateNestedManyWithoutUserInput.schema';
import { ReviewCreateNestedOneWithoutUserInputObjectSchema as ReviewCreateNestedOneWithoutUserInputObjectSchema } from './ReviewCreateNestedOneWithoutUserInput.schema';
import { WalletCreateNestedOneWithoutUserInputObjectSchema as WalletCreateNestedOneWithoutUserInputObjectSchema } from './WalletCreateNestedOneWithoutUserInput.schema';
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
  payments: z.lazy(() => PaymentCreateNestedManyWithoutUserInputObjectSchema).optional(),
  review: z.lazy(() => ReviewCreateNestedOneWithoutUserInputObjectSchema).optional(),
  wallet: z.lazy(() => WalletCreateNestedOneWithoutUserInputObjectSchema),
  legalAcceptances: z.lazy(() => LegalAcceptancesCreateNestedManyWithoutUserInputObjectSchema).optional(),
  totp: z.lazy(() => TotpTokenCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutSubscribesInput>;
export const UserCreateWithoutSubscribesInputObjectZodSchema = makeSchema();
