import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanUpdateWithoutPaymentsInputObjectSchema as PlanUpdateWithoutPaymentsInputObjectSchema } from './PlanUpdateWithoutPaymentsInput.schema';
import { PlanUncheckedUpdateWithoutPaymentsInputObjectSchema as PlanUncheckedUpdateWithoutPaymentsInputObjectSchema } from './PlanUncheckedUpdateWithoutPaymentsInput.schema';
import { PlanCreateWithoutPaymentsInputObjectSchema as PlanCreateWithoutPaymentsInputObjectSchema } from './PlanCreateWithoutPaymentsInput.schema';
import { PlanUncheckedCreateWithoutPaymentsInputObjectSchema as PlanUncheckedCreateWithoutPaymentsInputObjectSchema } from './PlanUncheckedCreateWithoutPaymentsInput.schema';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './PlanWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PlanUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => PlanUncheckedUpdateWithoutPaymentsInputObjectSchema)]),
  create: z.union([z.lazy(() => PlanCreateWithoutPaymentsInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutPaymentsInputObjectSchema)]),
  where: z.lazy(() => PlanWhereInputObjectSchema).optional()
}).strict();
export const PlanUpsertWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.PlanUpsertWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpsertWithoutPaymentsInput>;
export const PlanUpsertWithoutPaymentsInputObjectZodSchema = makeSchema();
