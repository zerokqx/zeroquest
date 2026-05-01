import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  vlessLink: z.string(),
  vlessClientId: z.string(),
  email: z.string().optional(),
  nextPaymentDate: z.coerce.date(),
  status: SubscribeStatusSchema.optional(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  planId: z.number().int(),
  totalGb: z.number().int()
}).strict();
export const SubscribeCreateManyUserInputObjectSchema: z.ZodType<Prisma.SubscribeCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeCreateManyUserInput>;
export const SubscribeCreateManyUserInputObjectZodSchema = makeSchema();
