import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema as EnumUserRoleFieldUpdateOperationsInputObjectSchema } from './EnumUserRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SubscribeUpdateManyWithoutUserNestedInputObjectSchema as SubscribeUpdateManyWithoutUserNestedInputObjectSchema } from './SubscribeUpdateManyWithoutUserNestedInput.schema';
import { PaymentUpdateManyWithoutUserNestedInputObjectSchema as PaymentUpdateManyWithoutUserNestedInputObjectSchema } from './PaymentUpdateManyWithoutUserNestedInput.schema';
import { ReviewUpdateOneWithoutUserNestedInputObjectSchema as ReviewUpdateOneWithoutUserNestedInputObjectSchema } from './ReviewUpdateOneWithoutUserNestedInput.schema';
import { WalletUpdateOneRequiredWithoutUserNestedInputObjectSchema as WalletUpdateOneRequiredWithoutUserNestedInputObjectSchema } from './WalletUpdateOneRequiredWithoutUserNestedInput.schema';
import { TotpTokenUpdateOneWithoutUserNestedInputObjectSchema as TotpTokenUpdateOneWithoutUserNestedInputObjectSchema } from './TotpTokenUpdateOneWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  login: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  telegramId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isBanned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  canComment: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  subscribes: z.lazy(() => SubscribeUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  review: z.lazy(() => ReviewUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  wallet: z.lazy(() => WalletUpdateOneRequiredWithoutUserNestedInputObjectSchema).optional(),
  totp: z.lazy(() => TotpTokenUpdateOneWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutLegalAcceptancesInput>;
export const UserUpdateWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
