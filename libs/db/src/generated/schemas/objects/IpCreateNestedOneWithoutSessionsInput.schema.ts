import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpCreateWithoutSessionsInputObjectSchema as IpCreateWithoutSessionsInputObjectSchema } from './IpCreateWithoutSessionsInput.schema';
import { IpUncheckedCreateWithoutSessionsInputObjectSchema as IpUncheckedCreateWithoutSessionsInputObjectSchema } from './IpUncheckedCreateWithoutSessionsInput.schema';
import { IpCreateOrConnectWithoutSessionsInputObjectSchema as IpCreateOrConnectWithoutSessionsInputObjectSchema } from './IpCreateOrConnectWithoutSessionsInput.schema';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './IpWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => IpCreateWithoutSessionsInputObjectSchema), z.lazy(() => IpUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => IpCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  connect: z.lazy(() => IpWhereUniqueInputObjectSchema).optional()
}).strict();
export const IpCreateNestedOneWithoutSessionsInputObjectSchema: z.ZodType<Prisma.IpCreateNestedOneWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.IpCreateNestedOneWithoutSessionsInput>;
export const IpCreateNestedOneWithoutSessionsInputObjectZodSchema = makeSchema();
