import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionCreateWithoutIpInputObjectSchema as SessionCreateWithoutIpInputObjectSchema } from './SessionCreateWithoutIpInput.schema';
import { SessionUncheckedCreateWithoutIpInputObjectSchema as SessionUncheckedCreateWithoutIpInputObjectSchema } from './SessionUncheckedCreateWithoutIpInput.schema';
import { SessionCreateOrConnectWithoutIpInputObjectSchema as SessionCreateOrConnectWithoutIpInputObjectSchema } from './SessionCreateOrConnectWithoutIpInput.schema';
import { SessionUpsertWithWhereUniqueWithoutIpInputObjectSchema as SessionUpsertWithWhereUniqueWithoutIpInputObjectSchema } from './SessionUpsertWithWhereUniqueWithoutIpInput.schema';
import { SessionCreateManyIpInputEnvelopeObjectSchema as SessionCreateManyIpInputEnvelopeObjectSchema } from './SessionCreateManyIpInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithWhereUniqueWithoutIpInputObjectSchema as SessionUpdateWithWhereUniqueWithoutIpInputObjectSchema } from './SessionUpdateWithWhereUniqueWithoutIpInput.schema';
import { SessionUpdateManyWithWhereWithoutIpInputObjectSchema as SessionUpdateManyWithWhereWithoutIpInputObjectSchema } from './SessionUpdateManyWithWhereWithoutIpInput.schema';
import { SessionScalarWhereInputObjectSchema as SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutIpInputObjectSchema), z.lazy(() => SessionCreateWithoutIpInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutIpInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutIpInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutIpInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutIpInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SessionUpsertWithWhereUniqueWithoutIpInputObjectSchema), z.lazy(() => SessionUpsertWithWhereUniqueWithoutIpInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyIpInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SessionUpdateWithWhereUniqueWithoutIpInputObjectSchema), z.lazy(() => SessionUpdateWithWhereUniqueWithoutIpInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SessionUpdateManyWithWhereWithoutIpInputObjectSchema), z.lazy(() => SessionUpdateManyWithWhereWithoutIpInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SessionUpdateManyWithoutIpNestedInputObjectSchema: z.ZodType<Prisma.SessionUpdateManyWithoutIpNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateManyWithoutIpNestedInput>;
export const SessionUpdateManyWithoutIpNestedInputObjectZodSchema = makeSchema();
