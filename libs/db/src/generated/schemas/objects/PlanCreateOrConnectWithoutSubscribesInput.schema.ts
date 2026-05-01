import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema';
import { PlanCreateWithoutSubscribesInputObjectSchema as PlanCreateWithoutSubscribesInputObjectSchema } from './PlanCreateWithoutSubscribesInput.schema';
import { PlanUncheckedCreateWithoutSubscribesInputObjectSchema as PlanUncheckedCreateWithoutSubscribesInputObjectSchema } from './PlanUncheckedCreateWithoutSubscribesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PlanWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PlanCreateWithoutSubscribesInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutSubscribesInputObjectSchema)])
}).strict();
export const PlanCreateOrConnectWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.PlanCreateOrConnectWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanCreateOrConnectWithoutSubscribesInput>;
export const PlanCreateOrConnectWithoutSubscribesInputObjectZodSchema = makeSchema();
