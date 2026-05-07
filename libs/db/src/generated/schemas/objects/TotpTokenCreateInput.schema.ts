import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateNestedOneWithoutTotpInputObjectSchema as UserCreateNestedOneWithoutTotpInputObjectSchema } from './UserCreateNestedOneWithoutTotpInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  enabled: z.boolean().optional(),
  ciphertext: z.string(),
  iv: z.string(),
  authTag: z.string(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTotpInputObjectSchema)
}).strict();
export const TotpTokenCreateInputObjectSchema: z.ZodType<Prisma.TotpTokenCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenCreateInput>;
export const TotpTokenCreateInputObjectZodSchema = makeSchema();
