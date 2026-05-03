import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionCreateWithoutIpInputObjectSchema as SessionCreateWithoutIpInputObjectSchema } from './SessionCreateWithoutIpInput.schema';
import { SessionUncheckedCreateWithoutIpInputObjectSchema as SessionUncheckedCreateWithoutIpInputObjectSchema } from './SessionUncheckedCreateWithoutIpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SessionCreateWithoutIpInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutIpInputObjectSchema)])
}).strict();
export const SessionCreateOrConnectWithoutIpInputObjectSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutIpInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateOrConnectWithoutIpInput>;
export const SessionCreateOrConnectWithoutIpInputObjectZodSchema = makeSchema();
