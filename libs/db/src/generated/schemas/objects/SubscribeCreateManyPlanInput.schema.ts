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
  updatedAt: z.coerce.date().optional(),
  totalGb: z.number().int()
}).strict();
export const SubscribeCreateManyPlanInputObjectSchema: z.ZodType<Prisma.SubscribeCreateManyPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeCreateManyPlanInput>;
export const SubscribeCreateManyPlanInputObjectZodSchema = makeSchema();
