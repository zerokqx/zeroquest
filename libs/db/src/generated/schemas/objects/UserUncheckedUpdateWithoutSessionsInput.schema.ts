import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema as EnumUserRoleFieldUpdateOperationsInputObjectSchema } from './EnumUserRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SubscribeUncheckedUpdateManyWithoutUserNestedInputObjectSchema as SubscribeUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SubscribeUncheckedUpdateManyWithoutUserNestedInput.schema';
import { PaymentUncheckedUpdateManyWithoutUserNestedInputObjectSchema as PaymentUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ReviewUncheckedUpdateOneWithoutUserNestedInputObjectSchema as ReviewUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './ReviewUncheckedUpdateOneWithoutUserNestedInput.schema';
import { LegalAcceptancesUncheckedUpdateManyWithoutUserNestedInputObjectSchema as LegalAcceptancesUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './LegalAcceptancesUncheckedUpdateManyWithoutUserNestedInput.schema'

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
  walletId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  subscribes: z.lazy(() => SubscribeUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  review: z.lazy(() => ReviewUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
  legalAcceptances: z.lazy(() => LegalAcceptancesUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput>;
export const UserUncheckedUpdateWithoutSessionsInputObjectZodSchema = makeSchema();
