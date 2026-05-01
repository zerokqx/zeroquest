import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './PlanWhereInput.schema';
import { PlanUpdateWithoutPaymentsInputObjectSchema as PlanUpdateWithoutPaymentsInputObjectSchema } from './PlanUpdateWithoutPaymentsInput.schema';
import { PlanUncheckedUpdateWithoutPaymentsInputObjectSchema as PlanUncheckedUpdateWithoutPaymentsInputObjectSchema } from './PlanUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PlanWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PlanUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => PlanUncheckedUpdateWithoutPaymentsInputObjectSchema)])
}).strict();
export const PlanUpdateToOneWithWhereWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.PlanUpdateToOneWithWhereWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpdateToOneWithWhereWithoutPaymentsInput>;
export const PlanUpdateToOneWithWhereWithoutPaymentsInputObjectZodSchema = makeSchema();
