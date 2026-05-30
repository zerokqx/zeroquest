import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema as EnumUserRoleFieldUpdateOperationsInputObjectSchema } from './EnumUserRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SubscribeUpdateManyWithoutUserNestedInputObjectSchema as SubscribeUpdateManyWithoutUserNestedInputObjectSchema } from './SubscribeUpdateManyWithoutUserNestedInput.schema';
import { PaymentUpdateManyWithoutUserNestedInputObjectSchema as PaymentUpdateManyWithoutUserNestedInputObjectSchema } from './PaymentUpdateManyWithoutUserNestedInput.schema';
import { WalletUpdateOneRequiredWithoutUserNestedInputObjectSchema as WalletUpdateOneRequiredWithoutUserNestedInputObjectSchema } from './WalletUpdateOneRequiredWithoutUserNestedInput.schema';
import { LegalAcceptancesUpdateManyWithoutUserNestedInputObjectSchema as LegalAcceptancesUpdateManyWithoutUserNestedInputObjectSchema } from './LegalAcceptancesUpdateManyWithoutUserNestedInput.schema';
import { TotpMfaUpdateOneWithoutUserNestedInputObjectSchema as TotpMfaUpdateOneWithoutUserNestedInputObjectSchema } from './TotpMfaUpdateOneWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  login: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  telegramId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  passwordHash: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isBanned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  canComment: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  subscribes: z.lazy(() => SubscribeUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  wallet: z.lazy(() => WalletUpdateOneRequiredWithoutUserNestedInputObjectSchema).optional(),
  legalAcceptances: z.lazy(() => LegalAcceptancesUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  totpMfa: z.lazy(() => TotpMfaUpdateOneWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutReviewInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutReviewInput>;
export const UserUpdateWithoutReviewInputObjectZodSchema = makeSchema();
