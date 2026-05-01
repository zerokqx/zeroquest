import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanUpdateWithoutSubscribesInputObjectSchema as PlanUpdateWithoutSubscribesInputObjectSchema } from './PlanUpdateWithoutSubscribesInput.schema';
import { PlanUncheckedUpdateWithoutSubscribesInputObjectSchema as PlanUncheckedUpdateWithoutSubscribesInputObjectSchema } from './PlanUncheckedUpdateWithoutSubscribesInput.schema';
import { PlanCreateWithoutSubscribesInputObjectSchema as PlanCreateWithoutSubscribesInputObjectSchema } from './PlanCreateWithoutSubscribesInput.schema';
import { PlanUncheckedCreateWithoutSubscribesInputObjectSchema as PlanUncheckedCreateWithoutSubscribesInputObjectSchema } from './PlanUncheckedCreateWithoutSubscribesInput.schema';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './PlanWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PlanUpdateWithoutSubscribesInputObjectSchema), z.lazy(() => PlanUncheckedUpdateWithoutSubscribesInputObjectSchema)]),
  create: z.union([z.lazy(() => PlanCreateWithoutSubscribesInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutSubscribesInputObjectSchema)]),
  where: z.lazy(() => PlanWhereInputObjectSchema).optional()
}).strict();
export const PlanUpsertWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.PlanUpsertWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpsertWithoutSubscribesInput>;
export const PlanUpsertWithoutSubscribesInputObjectZodSchema = makeSchema();
