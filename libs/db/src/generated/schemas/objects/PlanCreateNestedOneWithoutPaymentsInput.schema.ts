import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanCreateWithoutPaymentsInputObjectSchema as PlanCreateWithoutPaymentsInputObjectSchema } from './PlanCreateWithoutPaymentsInput.schema';
import { PlanUncheckedCreateWithoutPaymentsInputObjectSchema as PlanUncheckedCreateWithoutPaymentsInputObjectSchema } from './PlanUncheckedCreateWithoutPaymentsInput.schema';
import { PlanCreateOrConnectWithoutPaymentsInputObjectSchema as PlanCreateOrConnectWithoutPaymentsInputObjectSchema } from './PlanCreateOrConnectWithoutPaymentsInput.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PlanCreateWithoutPaymentsInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PlanCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => PlanWhereUniqueInputObjectSchema).optional()
}).strict();
export const PlanCreateNestedOneWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.PlanCreateNestedOneWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanCreateNestedOneWithoutPaymentsInput>;
export const PlanCreateNestedOneWithoutPaymentsInputObjectZodSchema = makeSchema();
