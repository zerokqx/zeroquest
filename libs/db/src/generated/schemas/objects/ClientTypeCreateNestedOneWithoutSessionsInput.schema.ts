import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeCreateWithoutSessionsInputObjectSchema as ClientTypeCreateWithoutSessionsInputObjectSchema } from './ClientTypeCreateWithoutSessionsInput.schema';
import { ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema as ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema } from './ClientTypeUncheckedCreateWithoutSessionsInput.schema';
import { ClientTypeCreateOrConnectWithoutSessionsInputObjectSchema as ClientTypeCreateOrConnectWithoutSessionsInputObjectSchema } from './ClientTypeCreateOrConnectWithoutSessionsInput.schema';
import { ClientTypeWhereUniqueInputObjectSchema as ClientTypeWhereUniqueInputObjectSchema } from './ClientTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientTypeCreateWithoutSessionsInputObjectSchema), z.lazy(() => ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientTypeCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  connect: z.lazy(() => ClientTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClientTypeCreateNestedOneWithoutSessionsInputObjectSchema: z.ZodType<Prisma.ClientTypeCreateNestedOneWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeCreateNestedOneWithoutSessionsInput>;
export const ClientTypeCreateNestedOneWithoutSessionsInputObjectZodSchema = makeSchema();
