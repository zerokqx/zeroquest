import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema';
import { EnumWalletHistoryTypeFieldUpdateOperationsInputObjectSchema as EnumWalletHistoryTypeFieldUpdateOperationsInputObjectSchema } from './EnumWalletHistoryTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  amount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  balance: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([WalletHistoryTypeSchema, z.lazy(() => EnumWalletHistoryTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  walletId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WalletHistoryUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.WalletHistoryUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryUncheckedUpdateManyInput>;
export const WalletHistoryUncheckedUpdateManyInputObjectZodSchema = makeSchema();
