import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpCreateWithoutSessionsInputObjectSchema as IpCreateWithoutSessionsInputObjectSchema } from './IpCreateWithoutSessionsInput.schema';
import { IpUncheckedCreateWithoutSessionsInputObjectSchema as IpUncheckedCreateWithoutSessionsInputObjectSchema } from './IpUncheckedCreateWithoutSessionsInput.schema';
import { IpCreateOrConnectWithoutSessionsInputObjectSchema as IpCreateOrConnectWithoutSessionsInputObjectSchema } from './IpCreateOrConnectWithoutSessionsInput.schema';
import { IpUpsertWithoutSessionsInputObjectSchema as IpUpsertWithoutSessionsInputObjectSchema } from './IpUpsertWithoutSessionsInput.schema';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './IpWhereInput.schema';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './IpWhereUniqueInput.schema';
import { IpUpdateToOneWithWhereWithoutSessionsInputObjectSchema as IpUpdateToOneWithWhereWithoutSessionsInputObjectSchema } from './IpUpdateToOneWithWhereWithoutSessionsInput.schema';
import { IpUpdateWithoutSessionsInputObjectSchema as IpUpdateWithoutSessionsInputObjectSchema } from './IpUpdateWithoutSessionsInput.schema';
import { IpUncheckedUpdateWithoutSessionsInputObjectSchema as IpUncheckedUpdateWithoutSessionsInputObjectSchema } from './IpUncheckedUpdateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => IpCreateWithoutSessionsInputObjectSchema), z.lazy(() => IpUncheckedCreateWithoutSessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => IpCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  upsert: z.lazy(() => IpUpsertWithoutSessionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => IpWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => IpWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => IpWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => IpUpdateToOneWithWhereWithoutSessionsInputObjectSchema), z.lazy(() => IpUpdateWithoutSessionsInputObjectSchema), z.lazy(() => IpUncheckedUpdateWithoutSessionsInputObjectSchema)]).optional()
}).strict();
export const IpUpdateOneWithoutSessionsNestedInputObjectSchema: z.ZodType<Prisma.IpUpdateOneWithoutSessionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.IpUpdateOneWithoutSessionsNestedInput>;
export const IpUpdateOneWithoutSessionsNestedInputObjectZodSchema = makeSchema();
