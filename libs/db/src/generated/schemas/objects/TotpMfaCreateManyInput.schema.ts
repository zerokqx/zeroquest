import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  enabled: z.boolean().optional(),
  ciphertext: z.string(),
  iv: z.string(),
  authTag: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();
export const TotpMfaCreateManyInputObjectSchema: z.ZodType<Prisma.TotpMfaCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaCreateManyInput>;
export const TotpMfaCreateManyInputObjectZodSchema = makeSchema();
