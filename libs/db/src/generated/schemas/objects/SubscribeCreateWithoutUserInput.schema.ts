import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema';
import { PlanCreateNestedOneWithoutSubscribesInputObjectSchema as PlanCreateNestedOneWithoutSubscribesInputObjectSchema } from './PlanCreateNestedOneWithoutSubscribesInput.schema'

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
  totalGb: z.number().int(),
  plan: z.lazy(() => PlanCreateNestedOneWithoutSubscribesInputObjectSchema)
}).strict();
export const SubscribeCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SubscribeCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeCreateWithoutUserInput>;
export const SubscribeCreateWithoutUserInputObjectZodSchema = makeSchema();
