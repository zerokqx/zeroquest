import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutClientTypeInputObjectSchema as SessionUpdateWithoutClientTypeInputObjectSchema } from './SessionUpdateWithoutClientTypeInput.schema';
import { SessionUncheckedUpdateWithoutClientTypeInputObjectSchema as SessionUncheckedUpdateWithoutClientTypeInputObjectSchema } from './SessionUncheckedUpdateWithoutClientTypeInput.schema';
import { SessionCreateWithoutClientTypeInputObjectSchema as SessionCreateWithoutClientTypeInputObjectSchema } from './SessionCreateWithoutClientTypeInput.schema';
import { SessionUncheckedCreateWithoutClientTypeInputObjectSchema as SessionUncheckedCreateWithoutClientTypeInputObjectSchema } from './SessionUncheckedCreateWithoutClientTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SessionUpdateWithoutClientTypeInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutClientTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => SessionCreateWithoutClientTypeInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutClientTypeInputObjectSchema)])
}).strict();
export const SessionUpsertWithWhereUniqueWithoutClientTypeInputObjectSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutClientTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutClientTypeInput>;
export const SessionUpsertWithWhereUniqueWithoutClientTypeInputObjectZodSchema = makeSchema();
