import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletCountOutputTypeSelectObjectSchema as WalletCountOutputTypeSelectObjectSchema } from './WalletCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WalletCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const WalletCountOutputTypeArgsObjectSchema = makeSchema();
export const WalletCountOutputTypeArgsObjectZodSchema = makeSchema();
