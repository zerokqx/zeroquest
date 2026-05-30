import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { SubscribeUncheckedCreateNestedManyWithoutUserInputObjectSchema as SubscribeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SubscribeUncheckedCreateNestedManyWithoutUserInput.schema';
import { PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema as PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PaymentUncheckedCreateNestedManyWithoutUserInput.schema';
import { LegalAcceptancesUncheckedCreateNestedManyWithoutUserInputObjectSchema as LegalAcceptancesUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './LegalAcceptancesUncheckedCreateNestedManyWithoutUserInput.schema';
import { TotpMfaUncheckedCreateNestedOneWithoutUserInputObjectSchema as TotpMfaUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './TotpMfaUncheckedCreateNestedOneWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  login: z.string(),
  telegramId: z.number().int().optional().nullable(),
  passwordHash: z.string().optional().nullable(),
  isBanned: z.boolean().optional(),
  role: UserRoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  canComment: z.boolean().optional(),
  walletId: z.string(),
  subscribes: z.lazy(() => SubscribeUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  legalAcceptances: z.lazy(() => LegalAcceptancesUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  totpMfa: z.lazy(() => TotpMfaUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutReviewInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutReviewInput>;
export const UserUncheckedCreateWithoutReviewInputObjectZodSchema = makeSchema();
