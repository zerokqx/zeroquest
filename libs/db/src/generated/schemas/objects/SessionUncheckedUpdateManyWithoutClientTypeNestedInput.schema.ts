import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionCreateWithoutClientTypeInputObjectSchema as SessionCreateWithoutClientTypeInputObjectSchema } from './SessionCreateWithoutClientTypeInput.schema';
import { SessionUncheckedCreateWithoutClientTypeInputObjectSchema as SessionUncheckedCreateWithoutClientTypeInputObjectSchema } from './SessionUncheckedCreateWithoutClientTypeInput.schema';
import { SessionCreateOrConnectWithoutClientTypeInputObjectSchema as SessionCreateOrConnectWithoutClientTypeInputObjectSchema } from './SessionCreateOrConnectWithoutClientTypeInput.schema';
import { SessionUpsertWithWhereUniqueWithoutClientTypeInputObjectSchema as SessionUpsertWithWhereUniqueWithoutClientTypeInputObjectSchema } from './SessionUpsertWithWhereUniqueWithoutClientTypeInput.schema';
import { SessionCreateManyClientTypeInputEnvelopeObjectSchema as SessionCreateManyClientTypeInputEnvelopeObjectSchema } from './SessionCreateManyClientTypeInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithWhereUniqueWithoutClientTypeInputObjectSchema as SessionUpdateWithWhereUniqueWithoutClientTypeInputObjectSchema } from './SessionUpdateWithWhereUniqueWithoutClientTypeInput.schema';
import { SessionUpdateManyWithWhereWithoutClientTypeInputObjectSchema as SessionUpdateManyWithWhereWithoutClientTypeInputObjectSchema } from './SessionUpdateManyWithWhereWithoutClientTypeInput.schema';
import { SessionScalarWhereInputObjectSchema as SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutClientTypeInputObjectSchema), z.lazy(() => SessionCreateWithoutClientTypeInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutClientTypeInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutClientTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutClientTypeInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutClientTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SessionUpsertWithWhereUniqueWithoutClientTypeInputObjectSchema), z.lazy(() => SessionUpsertWithWhereUniqueWithoutClientTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyClientTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SessionUpdateWithWhereUniqueWithoutClientTypeInputObjectSchema), z.lazy(() => SessionUpdateWithWhereUniqueWithoutClientTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SessionUpdateManyWithWhereWithoutClientTypeInputObjectSchema), z.lazy(() => SessionUpdateManyWithWhereWithoutClientTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SessionUncheckedUpdateManyWithoutClientTypeNestedInputObjectSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutClientTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutClientTypeNestedInput>;
export const SessionUncheckedUpdateManyWithoutClientTypeNestedInputObjectZodSchema = makeSchema();
