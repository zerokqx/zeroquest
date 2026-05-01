import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeWhereUniqueInputObjectSchema as ClientTypeWhereUniqueInputObjectSchema } from './ClientTypeWhereUniqueInput.schema';
import { ClientTypeCreateWithoutSessionsInputObjectSchema as ClientTypeCreateWithoutSessionsInputObjectSchema } from './ClientTypeCreateWithoutSessionsInput.schema';
import { ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema as ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema } from './ClientTypeUncheckedCreateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClientTypeCreateWithoutSessionsInputObjectSchema), z.lazy(() => ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema)])
}).strict();
export const ClientTypeCreateOrConnectWithoutSessionsInputObjectSchema: z.ZodType<Prisma.ClientTypeCreateOrConnectWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeCreateOrConnectWithoutSessionsInput>;
export const ClientTypeCreateOrConnectWithoutSessionsInputObjectZodSchema = makeSchema();
