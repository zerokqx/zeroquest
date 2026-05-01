import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { WalletHistoryUpdateManyWithoutWalletNestedInputObjectSchema as WalletHistoryUpdateManyWithoutWalletNestedInputObjectSchema } from './WalletHistoryUpdateManyWithoutWalletNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  held: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  balance: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  walletHistories: z.lazy(() => WalletHistoryUpdateManyWithoutWalletNestedInputObjectSchema).optional()
}).strict();
export const WalletUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.WalletUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUpdateWithoutUserInput>;
export const WalletUpdateWithoutUserInputObjectZodSchema = makeSchema();
