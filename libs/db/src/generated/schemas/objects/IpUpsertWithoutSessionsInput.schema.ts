import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpUpdateWithoutSessionsInputObjectSchema as IpUpdateWithoutSessionsInputObjectSchema } from './IpUpdateWithoutSessionsInput.schema';
import { IpUncheckedUpdateWithoutSessionsInputObjectSchema as IpUncheckedUpdateWithoutSessionsInputObjectSchema } from './IpUncheckedUpdateWithoutSessionsInput.schema';
import { IpCreateWithoutSessionsInputObjectSchema as IpCreateWithoutSessionsInputObjectSchema } from './IpCreateWithoutSessionsInput.schema';
import { IpUncheckedCreateWithoutSessionsInputObjectSchema as IpUncheckedCreateWithoutSessionsInputObjectSchema } from './IpUncheckedCreateWithoutSessionsInput.schema';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './IpWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => IpUpdateWithoutSessionsInputObjectSchema), z.lazy(() => IpUncheckedUpdateWithoutSessionsInputObjectSchema)]),
  create: z.union([z.lazy(() => IpCreateWithoutSessionsInputObjectSchema), z.lazy(() => IpUncheckedCreateWithoutSessionsInputObjectSchema)]),
  where: z.lazy(() => IpWhereInputObjectSchema).optional()
}).strict();
export const IpUpsertWithoutSessionsInputObjectSchema: z.ZodType<Prisma.IpUpsertWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.IpUpsertWithoutSessionsInput>;
export const IpUpsertWithoutSessionsInputObjectZodSchema = makeSchema();
