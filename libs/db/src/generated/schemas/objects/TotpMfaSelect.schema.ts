import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  enabled: z.boolean().optional(),
  ciphertext: z.boolean().optional(),
  iv: z.boolean().optional(),
  authTag: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional()
}).strict();
export const TotpMfaSelectObjectSchema: z.ZodType<Prisma.TotpMfaSelect> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaSelect>;
export const TotpMfaSelectObjectZodSchema = makeSchema();
