import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionCreateWithoutClientTypeInputObjectSchema as SessionCreateWithoutClientTypeInputObjectSchema } from './SessionCreateWithoutClientTypeInput.schema';
import { SessionUncheckedCreateWithoutClientTypeInputObjectSchema as SessionUncheckedCreateWithoutClientTypeInputObjectSchema } from './SessionUncheckedCreateWithoutClientTypeInput.schema';
import { SessionCreateOrConnectWithoutClientTypeInputObjectSchema as SessionCreateOrConnectWithoutClientTypeInputObjectSchema } from './SessionCreateOrConnectWithoutClientTypeInput.schema';
import { SessionCreateManyClientTypeInputEnvelopeObjectSchema as SessionCreateManyClientTypeInputEnvelopeObjectSchema } from './SessionCreateManyClientTypeInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutClientTypeInputObjectSchema), z.lazy(() => SessionCreateWithoutClientTypeInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutClientTypeInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutClientTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutClientTypeInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutClientTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyClientTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SessionCreateNestedManyWithoutClientTypeInputObjectSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutClientTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateNestedManyWithoutClientTypeInput>;
export const SessionCreateNestedManyWithoutClientTypeInputObjectZodSchema = makeSchema();
