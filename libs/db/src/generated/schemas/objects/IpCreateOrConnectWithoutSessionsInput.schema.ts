import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './IpWhereUniqueInput.schema';
import { IpCreateWithoutSessionsInputObjectSchema as IpCreateWithoutSessionsInputObjectSchema } from './IpCreateWithoutSessionsInput.schema';
import { IpUncheckedCreateWithoutSessionsInputObjectSchema as IpUncheckedCreateWithoutSessionsInputObjectSchema } from './IpUncheckedCreateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => IpWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => IpCreateWithoutSessionsInputObjectSchema), z.lazy(() => IpUncheckedCreateWithoutSessionsInputObjectSchema)])
}).strict();
export const IpCreateOrConnectWithoutSessionsInputObjectSchema: z.ZodType<Prisma.IpCreateOrConnectWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.IpCreateOrConnectWithoutSessionsInput>;
export const IpCreateOrConnectWithoutSessionsInputObjectZodSchema = makeSchema();
