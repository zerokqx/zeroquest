import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema'

const makeSchema = () => z.object({
  set: WalletHistoryTypeSchema.optional()
}).strict();
export const EnumWalletHistoryTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumWalletHistoryTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumWalletHistoryTypeFieldUpdateOperationsInput>;
export const EnumWalletHistoryTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
