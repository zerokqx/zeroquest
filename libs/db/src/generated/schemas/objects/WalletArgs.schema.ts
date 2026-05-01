import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletSelectObjectSchema as WalletSelectObjectSchema } from './WalletSelect.schema';
import { WalletIncludeObjectSchema as WalletIncludeObjectSchema } from './WalletInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WalletSelectObjectSchema).optional(),
  include: z.lazy(() => WalletIncludeObjectSchema).optional()
}).strict();
export const WalletArgsObjectSchema = makeSchema();
export const WalletArgsObjectZodSchema = makeSchema();
