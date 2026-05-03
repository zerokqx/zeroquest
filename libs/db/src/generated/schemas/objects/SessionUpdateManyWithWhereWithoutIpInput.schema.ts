import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionScalarWhereInputObjectSchema as SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema';
import { SessionUpdateManyMutationInputObjectSchema as SessionUpdateManyMutationInputObjectSchema } from './SessionUpdateManyMutationInput.schema';
import { SessionUncheckedUpdateManyWithoutIpInputObjectSchema as SessionUncheckedUpdateManyWithoutIpInputObjectSchema } from './SessionUncheckedUpdateManyWithoutIpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SessionUpdateManyMutationInputObjectSchema), z.lazy(() => SessionUncheckedUpdateManyWithoutIpInputObjectSchema)])
}).strict();
export const SessionUpdateManyWithWhereWithoutIpInputObjectSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutIpInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutIpInput>;
export const SessionUpdateManyWithWhereWithoutIpInputObjectZodSchema = makeSchema();
