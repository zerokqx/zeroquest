import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionCreateWithoutClientTypeInputObjectSchema as SessionCreateWithoutClientTypeInputObjectSchema } from './SessionCreateWithoutClientTypeInput.schema';
import { SessionUncheckedCreateWithoutClientTypeInputObjectSchema as SessionUncheckedCreateWithoutClientTypeInputObjectSchema } from './SessionUncheckedCreateWithoutClientTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SessionCreateWithoutClientTypeInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutClientTypeInputObjectSchema)])
}).strict();
export const SessionCreateOrConnectWithoutClientTypeInputObjectSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutClientTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateOrConnectWithoutClientTypeInput>;
export const SessionCreateOrConnectWithoutClientTypeInputObjectZodSchema = makeSchema();
