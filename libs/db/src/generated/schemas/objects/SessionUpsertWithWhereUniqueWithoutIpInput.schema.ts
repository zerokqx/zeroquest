import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutIpInputObjectSchema as SessionUpdateWithoutIpInputObjectSchema } from './SessionUpdateWithoutIpInput.schema';
import { SessionUncheckedUpdateWithoutIpInputObjectSchema as SessionUncheckedUpdateWithoutIpInputObjectSchema } from './SessionUncheckedUpdateWithoutIpInput.schema';
import { SessionCreateWithoutIpInputObjectSchema as SessionCreateWithoutIpInputObjectSchema } from './SessionCreateWithoutIpInput.schema';
import { SessionUncheckedCreateWithoutIpInputObjectSchema as SessionUncheckedCreateWithoutIpInputObjectSchema } from './SessionUncheckedCreateWithoutIpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SessionUpdateWithoutIpInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutIpInputObjectSchema)]),
  create: z.union([z.lazy(() => SessionCreateWithoutIpInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutIpInputObjectSchema)])
}).strict();
export const SessionUpsertWithWhereUniqueWithoutIpInputObjectSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutIpInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutIpInput>;
export const SessionUpsertWithWhereUniqueWithoutIpInputObjectZodSchema = makeSchema();
