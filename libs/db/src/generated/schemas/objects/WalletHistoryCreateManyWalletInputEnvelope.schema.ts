import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryCreateManyWalletInputObjectSchema as WalletHistoryCreateManyWalletInputObjectSchema } from './WalletHistoryCreateManyWalletInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WalletHistoryCreateManyWalletInputObjectSchema), z.lazy(() => WalletHistoryCreateManyWalletInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WalletHistoryCreateManyWalletInputEnvelopeObjectSchema: z.ZodType<Prisma.WalletHistoryCreateManyWalletInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryCreateManyWalletInputEnvelope>;
export const WalletHistoryCreateManyWalletInputEnvelopeObjectZodSchema = makeSchema();
