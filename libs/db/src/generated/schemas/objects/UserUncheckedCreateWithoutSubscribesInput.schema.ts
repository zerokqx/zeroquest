import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema as PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PaymentUncheckedCreateNestedManyWithoutUserInput.schema';
import { ReviewUncheckedCreateNestedOneWithoutUserInputObjectSchema as ReviewUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './ReviewUncheckedCreateNestedOneWithoutUserInput.schema';
import { LegalAcceptancesUncheckedCreateNestedManyWithoutUserInputObjectSchema as LegalAcceptancesUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './LegalAcceptancesUncheckedCreateNestedManyWithoutUserInput.schema';
import { TotpMfaUncheckedCreateNestedOneWithoutUserInputObjectSchema as TotpMfaUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './TotpMfaUncheckedCreateNestedOneWithoutUserInput.schema'

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
  walletId: z.string(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  review: z.lazy(() => ReviewUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  legalAcceptances: z.lazy(() => LegalAcceptancesUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  totpMfa: z.lazy(() => TotpMfaUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutSubscribesInput>;
export const UserUncheckedCreateWithoutSubscribesInputObjectZodSchema = makeSchema();
