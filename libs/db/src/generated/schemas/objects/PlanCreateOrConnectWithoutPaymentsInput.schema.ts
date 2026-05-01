import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema';
import { PlanCreateWithoutPaymentsInputObjectSchema as PlanCreateWithoutPaymentsInputObjectSchema } from './PlanCreateWithoutPaymentsInput.schema';
import { PlanUncheckedCreateWithoutPaymentsInputObjectSchema as PlanUncheckedCreateWithoutPaymentsInputObjectSchema } from './PlanUncheckedCreateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PlanWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PlanCreateWithoutPaymentsInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutPaymentsInputObjectSchema)])
}).strict();
export const PlanCreateOrConnectWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.PlanCreateOrConnectWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanCreateOrConnectWithoutPaymentsInput>;
export const PlanCreateOrConnectWithoutPaymentsInputObjectZodSchema = makeSchema();
