import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const walletscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WalletScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WalletScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WalletScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WalletScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WalletScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  held: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  balance: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const WalletScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WalletScalarWhereWithAggregatesInput> = walletscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WalletScalarWhereWithAggregatesInput>;
export const WalletScalarWhereWithAggregatesInputObjectZodSchema = walletscalarwherewithaggregatesinputSchema;
