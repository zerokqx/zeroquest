import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeCreateWithoutSessionsInputObjectSchema as ClientTypeCreateWithoutSessionsInputObjectSchema } from './ClientTypeCreateWithoutSessionsInput.schema';
import { ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema as ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema } from './ClientTypeUncheckedCreateWithoutSessionsInput.schema';
import { ClientTypeCreateOrConnectWithoutSessionsInputObjectSchema as ClientTypeCreateOrConnectWithoutSessionsInputObjectSchema } from './ClientTypeCreateOrConnectWithoutSessionsInput.schema';
import { ClientTypeUpsertWithoutSessionsInputObjectSchema as ClientTypeUpsertWithoutSessionsInputObjectSchema } from './ClientTypeUpsertWithoutSessionsInput.schema';
import { ClientTypeWhereUniqueInputObjectSchema as ClientTypeWhereUniqueInputObjectSchema } from './ClientTypeWhereUniqueInput.schema';
import { ClientTypeUpdateToOneWithWhereWithoutSessionsInputObjectSchema as ClientTypeUpdateToOneWithWhereWithoutSessionsInputObjectSchema } from './ClientTypeUpdateToOneWithWhereWithoutSessionsInput.schema';
import { ClientTypeUpdateWithoutSessionsInputObjectSchema as ClientTypeUpdateWithoutSessionsInputObjectSchema } from './ClientTypeUpdateWithoutSessionsInput.schema';
import { ClientTypeUncheckedUpdateWithoutSessionsInputObjectSchema as ClientTypeUncheckedUpdateWithoutSessionsInputObjectSchema } from './ClientTypeUncheckedUpdateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClientTypeCreateWithoutSessionsInputObjectSchema), z.lazy(() => ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClientTypeCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  upsert: z.lazy(() => ClientTypeUpsertWithoutSessionsInputObjectSchema).optional(),
  connect: z.lazy(() => ClientTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClientTypeUpdateToOneWithWhereWithoutSessionsInputObjectSchema), z.lazy(() => ClientTypeUpdateWithoutSessionsInputObjectSchema), z.lazy(() => ClientTypeUncheckedUpdateWithoutSessionsInputObjectSchema)]).optional()
}).strict();
export const ClientTypeUpdateOneRequiredWithoutSessionsNestedInputObjectSchema: z.ZodType<Prisma.ClientTypeUpdateOneRequiredWithoutSessionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeUpdateOneRequiredWithoutSessionsNestedInput>;
export const ClientTypeUpdateOneRequiredWithoutSessionsNestedInputObjectZodSchema = makeSchema();
