import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  vlessLink: z.string(),
  vlessClientId: z.string(),
  userId: z.string(),
  email: z.string().optional(),
  nextPaymentDate: z.coerce.date(),
  status: SubscribeStatusSchema.optional(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  planId: z.number().int(),
  totalGb: z.number().int()
}).strict();
export const SubscribeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SubscribeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUncheckedCreateInput>;
export const SubscribeUncheckedCreateInputObjectZodSchema = makeSchema();
