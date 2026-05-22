import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateNestedOneWithoutTotpMfaInputObjectSchema as UserCreateNestedOneWithoutTotpMfaInputObjectSchema } from './UserCreateNestedOneWithoutTotpMfaInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  enabled: z.boolean().optional(),
  ciphertext: z.string(),
  iv: z.string(),
  authTag: z.string(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTotpMfaInputObjectSchema)
}).strict();
export const TotpMfaCreateInputObjectSchema: z.ZodType<Prisma.TotpMfaCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaCreateInput>;
export const TotpMfaCreateInputObjectZodSchema = makeSchema();
