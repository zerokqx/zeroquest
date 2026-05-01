import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateOneWithoutWalletNestedInputObjectSchema as UserUncheckedUpdateOneWithoutWalletNestedInputObjectSchema } from './UserUncheckedUpdateOneWithoutWalletNestedInput.schema';
import { WalletHistoryUncheckedUpdateManyWithoutWalletNestedInputObjectSchema as WalletHistoryUncheckedUpdateManyWithoutWalletNestedInputObjectSchema } from './WalletHistoryUncheckedUpdateManyWithoutWalletNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  held: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  balance: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUncheckedUpdateOneWithoutWalletNestedInputObjectSchema).optional(),
  walletHistories: z.lazy(() => WalletHistoryUncheckedUpdateManyWithoutWalletNestedInputObjectSchema).optional()
}).strict();
export const WalletUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.WalletUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUncheckedUpdateInput>;
export const WalletUncheckedUpdateInputObjectZodSchema = makeSchema();
