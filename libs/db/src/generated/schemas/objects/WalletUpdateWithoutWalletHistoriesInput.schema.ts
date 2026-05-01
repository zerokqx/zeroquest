import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutWalletNestedInputObjectSchema as UserUpdateOneWithoutWalletNestedInputObjectSchema } from './UserUpdateOneWithoutWalletNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  held: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  balance: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutWalletNestedInputObjectSchema).optional()
}).strict();
export const WalletUpdateWithoutWalletHistoriesInputObjectSchema: z.ZodType<Prisma.WalletUpdateWithoutWalletHistoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUpdateWithoutWalletHistoriesInput>;
export const WalletUpdateWithoutWalletHistoriesInputObjectZodSchema = makeSchema();
