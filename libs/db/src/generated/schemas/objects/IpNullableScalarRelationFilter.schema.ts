import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './IpWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => IpWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => IpWhereInputObjectSchema).optional().nullable()
}).strict();
export const IpNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.IpNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.IpNullableScalarRelationFilter>;
export const IpNullableScalarRelationFilterObjectZodSchema = makeSchema();
