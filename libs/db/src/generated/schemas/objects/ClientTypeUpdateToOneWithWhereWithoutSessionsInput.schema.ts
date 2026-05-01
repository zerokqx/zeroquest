import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeWhereInputObjectSchema as ClientTypeWhereInputObjectSchema } from './ClientTypeWhereInput.schema';
import { ClientTypeUpdateWithoutSessionsInputObjectSchema as ClientTypeUpdateWithoutSessionsInputObjectSchema } from './ClientTypeUpdateWithoutSessionsInput.schema';
import { ClientTypeUncheckedUpdateWithoutSessionsInputObjectSchema as ClientTypeUncheckedUpdateWithoutSessionsInputObjectSchema } from './ClientTypeUncheckedUpdateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClientTypeUpdateWithoutSessionsInputObjectSchema), z.lazy(() => ClientTypeUncheckedUpdateWithoutSessionsInputObjectSchema)])
}).strict();
export const ClientTypeUpdateToOneWithWhereWithoutSessionsInputObjectSchema: z.ZodType<Prisma.ClientTypeUpdateToOneWithWhereWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeUpdateToOneWithWhereWithoutSessionsInput>;
export const ClientTypeUpdateToOneWithWhereWithoutSessionsInputObjectZodSchema = makeSchema();
