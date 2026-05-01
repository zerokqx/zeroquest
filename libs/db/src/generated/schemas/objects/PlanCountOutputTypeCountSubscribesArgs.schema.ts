import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeWhereInputObjectSchema as SubscribeWhereInputObjectSchema } from './SubscribeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscribeWhereInputObjectSchema).optional()
}).strict();
export const PlanCountOutputTypeCountSubscribesArgsObjectSchema = makeSchema();
export const PlanCountOutputTypeCountSubscribesArgsObjectZodSchema = makeSchema();
