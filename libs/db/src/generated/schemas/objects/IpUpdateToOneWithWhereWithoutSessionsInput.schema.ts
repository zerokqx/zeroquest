import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './IpWhereInput.schema';
import { IpUpdateWithoutSessionsInputObjectSchema as IpUpdateWithoutSessionsInputObjectSchema } from './IpUpdateWithoutSessionsInput.schema';
import { IpUncheckedUpdateWithoutSessionsInputObjectSchema as IpUncheckedUpdateWithoutSessionsInputObjectSchema } from './IpUncheckedUpdateWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => IpWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => IpUpdateWithoutSessionsInputObjectSchema), z.lazy(() => IpUncheckedUpdateWithoutSessionsInputObjectSchema)])
}).strict();
export const IpUpdateToOneWithWhereWithoutSessionsInputObjectSchema: z.ZodType<Prisma.IpUpdateToOneWithWhereWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.IpUpdateToOneWithWhereWithoutSessionsInput>;
export const IpUpdateToOneWithWhereWithoutSessionsInputObjectZodSchema = makeSchema();
