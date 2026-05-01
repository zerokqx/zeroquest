import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanCreateWithoutSubscribesInputObjectSchema as PlanCreateWithoutSubscribesInputObjectSchema } from './PlanCreateWithoutSubscribesInput.schema';
import { PlanUncheckedCreateWithoutSubscribesInputObjectSchema as PlanUncheckedCreateWithoutSubscribesInputObjectSchema } from './PlanUncheckedCreateWithoutSubscribesInput.schema';
import { PlanCreateOrConnectWithoutSubscribesInputObjectSchema as PlanCreateOrConnectWithoutSubscribesInputObjectSchema } from './PlanCreateOrConnectWithoutSubscribesInput.schema';
import { PlanUpsertWithoutSubscribesInputObjectSchema as PlanUpsertWithoutSubscribesInputObjectSchema } from './PlanUpsertWithoutSubscribesInput.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema';
import { PlanUpdateToOneWithWhereWithoutSubscribesInputObjectSchema as PlanUpdateToOneWithWhereWithoutSubscribesInputObjectSchema } from './PlanUpdateToOneWithWhereWithoutSubscribesInput.schema';
import { PlanUpdateWithoutSubscribesInputObjectSchema as PlanUpdateWithoutSubscribesInputObjectSchema } from './PlanUpdateWithoutSubscribesInput.schema';
import { PlanUncheckedUpdateWithoutSubscribesInputObjectSchema as PlanUncheckedUpdateWithoutSubscribesInputObjectSchema } from './PlanUncheckedUpdateWithoutSubscribesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PlanCreateWithoutSubscribesInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutSubscribesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PlanCreateOrConnectWithoutSubscribesInputObjectSchema).optional(),
  upsert: z.lazy(() => PlanUpsertWithoutSubscribesInputObjectSchema).optional(),
  connect: z.lazy(() => PlanWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => PlanUpdateToOneWithWhereWithoutSubscribesInputObjectSchema), z.lazy(() => PlanUpdateWithoutSubscribesInputObjectSchema), z.lazy(() => PlanUncheckedUpdateWithoutSubscribesInputObjectSchema)]).optional()
}).strict();
export const PlanUpdateOneRequiredWithoutSubscribesNestedInputObjectSchema: z.ZodType<Prisma.PlanUpdateOneRequiredWithoutSubscribesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpdateOneRequiredWithoutSubscribesNestedInput>;
export const PlanUpdateOneRequiredWithoutSubscribesNestedInputObjectZodSchema = makeSchema();
