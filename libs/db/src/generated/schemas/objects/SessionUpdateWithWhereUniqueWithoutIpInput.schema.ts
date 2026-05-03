import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutIpInputObjectSchema as SessionUpdateWithoutIpInputObjectSchema } from './SessionUpdateWithoutIpInput.schema';
import { SessionUncheckedUpdateWithoutIpInputObjectSchema as SessionUncheckedUpdateWithoutIpInputObjectSchema } from './SessionUncheckedUpdateWithoutIpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SessionUpdateWithoutIpInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutIpInputObjectSchema)])
}).strict();
export const SessionUpdateWithWhereUniqueWithoutIpInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutIpInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutIpInput>;
export const SessionUpdateWithWhereUniqueWithoutIpInputObjectZodSchema = makeSchema();
