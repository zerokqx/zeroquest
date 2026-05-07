import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { SubscribeUncheckedCreateNestedManyWithoutUserInputObjectSchema as SubscribeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SubscribeUncheckedCreateNestedManyWithoutUserInput.schema';
import { ReviewUncheckedCreateNestedOneWithoutUserInputObjectSchema as ReviewUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './ReviewUncheckedCreateNestedOneWithoutUserInput.schema';
import { LegalAcceptancesUncheckedCreateNestedManyWithoutUserInputObjectSchema as LegalAcceptancesUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './LegalAcceptancesUncheckedCreateNestedManyWithoutUserInput.schema';
import { TotpTokenUncheckedCreateNestedOneWithoutUserInputObjectSchema as TotpTokenUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './TotpTokenUncheckedCreateNestedOneWithoutUserInput.schema'

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
  subscribes: z.lazy(() => SubscribeUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  review: z.lazy(() => ReviewUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  legalAcceptances: z.lazy(() => LegalAcceptancesUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  totp: z.lazy(() => TotpTokenUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutPaymentsInput>;
export const UserUncheckedCreateWithoutPaymentsInputObjectZodSchema = makeSchema();
