import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanCreateWithoutPaymentsInputObjectSchema as PlanCreateWithoutPaymentsInputObjectSchema } from './PlanCreateWithoutPaymentsInput.schema';
import { PlanUncheckedCreateWithoutPaymentsInputObjectSchema as PlanUncheckedCreateWithoutPaymentsInputObjectSchema } from './PlanUncheckedCreateWithoutPaymentsInput.schema';
import { PlanCreateOrConnectWithoutPaymentsInputObjectSchema as PlanCreateOrConnectWithoutPaymentsInputObjectSchema } from './PlanCreateOrConnectWithoutPaymentsInput.schema';
import { PlanUpsertWithoutPaymentsInputObjectSchema as PlanUpsertWithoutPaymentsInputObjectSchema } from './PlanUpsertWithoutPaymentsInput.schema';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './PlanWhereInput.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema';
import { PlanUpdateToOneWithWhereWithoutPaymentsInputObjectSchema as PlanUpdateToOneWithWhereWithoutPaymentsInputObjectSchema } from './PlanUpdateToOneWithWhereWithoutPaymentsInput.schema';
import { PlanUpdateWithoutPaymentsInputObjectSchema as PlanUpdateWithoutPaymentsInputObjectSchema } from './PlanUpdateWithoutPaymentsInput.schema';
import { PlanUncheckedUpdateWithoutPaymentsInputObjectSchema as PlanUncheckedUpdateWithoutPaymentsInputObjectSchema } from './PlanUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PlanCreateWithoutPaymentsInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PlanCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  upsert: z.lazy(() => PlanUpsertWithoutPaymentsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => PlanWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => PlanWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => PlanWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PlanUpdateToOneWithWhereWithoutPaymentsInputObjectSchema), z.lazy(() => PlanUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => PlanUncheckedUpdateWithoutPaymentsInputObjectSchema)]).optional()
}).strict();
export const PlanUpdateOneWithoutPaymentsNestedInputObjectSchema: z.ZodType<Prisma.PlanUpdateOneWithoutPaymentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpdateOneWithoutPaymentsNestedInput>;
export const PlanUpdateOneWithoutPaymentsNestedInputObjectZodSchema = makeSchema();
