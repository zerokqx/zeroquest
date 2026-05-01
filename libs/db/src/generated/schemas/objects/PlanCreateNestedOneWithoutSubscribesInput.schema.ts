import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanCreateWithoutSubscribesInputObjectSchema as PlanCreateWithoutSubscribesInputObjectSchema } from './PlanCreateWithoutSubscribesInput.schema';
import { PlanUncheckedCreateWithoutSubscribesInputObjectSchema as PlanUncheckedCreateWithoutSubscribesInputObjectSchema } from './PlanUncheckedCreateWithoutSubscribesInput.schema';
import { PlanCreateOrConnectWithoutSubscribesInputObjectSchema as PlanCreateOrConnectWithoutSubscribesInputObjectSchema } from './PlanCreateOrConnectWithoutSubscribesInput.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PlanCreateWithoutSubscribesInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutSubscribesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => PlanCreateOrConnectWithoutSubscribesInputObjectSchema).optional(),
  connect: z.lazy(() => PlanWhereUniqueInputObjectSchema).optional()
}).strict();
export const PlanCreateNestedOneWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.PlanCreateNestedOneWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanCreateNestedOneWithoutSubscribesInput>;
export const PlanCreateNestedOneWithoutSubscribesInputObjectZodSchema = makeSchema();
