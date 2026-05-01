import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './PlanWhereInput.schema';
import { PlanUpdateWithoutSubscribesInputObjectSchema as PlanUpdateWithoutSubscribesInputObjectSchema } from './PlanUpdateWithoutSubscribesInput.schema';
import { PlanUncheckedUpdateWithoutSubscribesInputObjectSchema as PlanUncheckedUpdateWithoutSubscribesInputObjectSchema } from './PlanUncheckedUpdateWithoutSubscribesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PlanWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PlanUpdateWithoutSubscribesInputObjectSchema), z.lazy(() => PlanUncheckedUpdateWithoutSubscribesInputObjectSchema)])
}).strict();
export const PlanUpdateToOneWithWhereWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.PlanUpdateToOneWithWhereWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpdateToOneWithWhereWithoutSubscribesInput>;
export const PlanUpdateToOneWithWhereWithoutSubscribesInputObjectZodSchema = makeSchema();
