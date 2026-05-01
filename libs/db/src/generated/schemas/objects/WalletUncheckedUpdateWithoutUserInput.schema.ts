import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { WalletHistoryUncheckedUpdateManyWithoutWalletNestedInputObjectSchema as WalletHistoryUncheckedUpdateManyWithoutWalletNestedInputObjectSchema } from './WalletHistoryUncheckedUpdateManyWithoutWalletNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  held: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  balance: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  walletHistories: z.lazy(() => WalletHistoryUncheckedUpdateManyWithoutWalletNestedInputObjectSchema).optional()
}).strict();
export const WalletUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.WalletUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUncheckedUpdateWithoutUserInput>;
export const WalletUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
