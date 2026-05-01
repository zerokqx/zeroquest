import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionScalarWhereInputObjectSchema as SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema';
import { SessionUpdateManyMutationInputObjectSchema as SessionUpdateManyMutationInputObjectSchema } from './SessionUpdateManyMutationInput.schema';
import { SessionUncheckedUpdateManyWithoutClientTypeInputObjectSchema as SessionUncheckedUpdateManyWithoutClientTypeInputObjectSchema } from './SessionUncheckedUpdateManyWithoutClientTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SessionUpdateManyMutationInputObjectSchema), z.lazy(() => SessionUncheckedUpdateManyWithoutClientTypeInputObjectSchema)])
}).strict();
export const SessionUpdateManyWithWhereWithoutClientTypeInputObjectSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutClientTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutClientTypeInput>;
export const SessionUpdateManyWithWhereWithoutClientTypeInputObjectZodSchema = makeSchema();
