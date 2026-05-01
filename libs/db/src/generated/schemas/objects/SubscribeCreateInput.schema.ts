import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema';
import { UserCreateNestedOneWithoutSubscribesInputObjectSchema as UserCreateNestedOneWithoutSubscribesInputObjectSchema } from './UserCreateNestedOneWithoutSubscribesInput.schema';
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
  totalGb: z.number().int(),
  user: z.lazy(() => UserCreateNestedOneWithoutSubscribesInputObjectSchema),
  plan: z.lazy(() => PlanCreateNestedOneWithoutSubscribesInputObjectSchema)
}).strict();
export const SubscribeCreateInputObjectSchema: z.ZodType<Prisma.SubscribeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeCreateInput>;
export const SubscribeCreateInputObjectZodSchema = makeSchema();
