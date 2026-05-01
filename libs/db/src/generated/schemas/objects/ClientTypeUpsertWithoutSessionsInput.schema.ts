import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeUpdateWithoutSessionsInputObjectSchema as ClientTypeUpdateWithoutSessionsInputObjectSchema } from './ClientTypeUpdateWithoutSessionsInput.schema';
import { ClientTypeUncheckedUpdateWithoutSessionsInputObjectSchema as ClientTypeUncheckedUpdateWithoutSessionsInputObjectSchema } from './ClientTypeUncheckedUpdateWithoutSessionsInput.schema';
import { ClientTypeCreateWithoutSessionsInputObjectSchema as ClientTypeCreateWithoutSessionsInputObjectSchema } from './ClientTypeCreateWithoutSessionsInput.schema';
import { ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema as ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema } from './ClientTypeUncheckedCreateWithoutSessionsInput.schema';
import { ClientTypeWhereInputObjectSchema as ClientTypeWhereInputObjectSchema } from './ClientTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClientTypeUpdateWithoutSessionsInputObjectSchema), z.lazy(() => ClientTypeUncheckedUpdateWithoutSessionsInputObjectSchema)]),
  create: z.union([z.lazy(() => ClientTypeCreateWithoutSessionsInputObjectSchema), z.lazy(() => ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema)]),
  where: z.lazy(() => ClientTypeWhereInputObjectSchema).optional()
}).strict();
export const ClientTypeUpsertWithoutSessionsInputObjectSchema: z.ZodType<Prisma.ClientTypeUpsertWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeUpsertWithoutSessionsInput>;
export const ClientTypeUpsertWithoutSessionsInputObjectZodSchema = makeSchema();
