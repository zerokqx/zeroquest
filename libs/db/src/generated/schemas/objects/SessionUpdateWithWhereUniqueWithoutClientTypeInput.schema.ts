import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutClientTypeInputObjectSchema as SessionUpdateWithoutClientTypeInputObjectSchema } from './SessionUpdateWithoutClientTypeInput.schema';
import { SessionUncheckedUpdateWithoutClientTypeInputObjectSchema as SessionUncheckedUpdateWithoutClientTypeInputObjectSchema } from './SessionUncheckedUpdateWithoutClientTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SessionUpdateWithoutClientTypeInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutClientTypeInputObjectSchema)])
}).strict();
export const SessionUpdateWithWhereUniqueWithoutClientTypeInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutClientTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutClientTypeInput>;
export const SessionUpdateWithWhereUniqueWithoutClientTypeInputObjectZodSchema = makeSchema();
