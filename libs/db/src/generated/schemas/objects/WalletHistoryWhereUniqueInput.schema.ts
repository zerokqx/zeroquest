import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const WalletHistoryWhereUniqueInputObjectSchema: z.ZodType<Prisma.WalletHistoryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryWhereUniqueInput>;
export const WalletHistoryWhereUniqueInputObjectZodSchema = makeSchema();
