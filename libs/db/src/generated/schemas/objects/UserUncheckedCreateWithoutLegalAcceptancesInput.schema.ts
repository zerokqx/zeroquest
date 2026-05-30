import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { SubscribeUncheckedCreateNestedManyWithoutUserInputObjectSchema as SubscribeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SubscribeUncheckedCreateNestedManyWithoutUserInput.schema';
import { PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema as PaymentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PaymentUncheckedCreateNestedManyWithoutUserInput.schema';
import { ReviewUncheckedCreateNestedOneWithoutUserInputObjectSchema as ReviewUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './ReviewUncheckedCreateNestedOneWithoutUserInput.schema';
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
  review: z.lazy(() => ReviewUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  totpMfa: z.lazy(() => TotpMfaUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutLegalAcceptancesInput>;
export const UserUncheckedCreateWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
