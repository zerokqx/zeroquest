import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionCreateWithoutIpInputObjectSchema as SessionCreateWithoutIpInputObjectSchema } from './SessionCreateWithoutIpInput.schema';
import { SessionUncheckedCreateWithoutIpInputObjectSchema as SessionUncheckedCreateWithoutIpInputObjectSchema } from './SessionUncheckedCreateWithoutIpInput.schema';
import { SessionCreateOrConnectWithoutIpInputObjectSchema as SessionCreateOrConnectWithoutIpInputObjectSchema } from './SessionCreateOrConnectWithoutIpInput.schema';
import { SessionCreateManyIpInputEnvelopeObjectSchema as SessionCreateManyIpInputEnvelopeObjectSchema } from './SessionCreateManyIpInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutIpInputObjectSchema), z.lazy(() => SessionCreateWithoutIpInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutIpInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutIpInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutIpInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutIpInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyIpInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SessionUncheckedCreateNestedManyWithoutIpInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutIpInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutIpInput>;
export const SessionUncheckedCreateNestedManyWithoutIpInputObjectZodSchema = makeSchema();
