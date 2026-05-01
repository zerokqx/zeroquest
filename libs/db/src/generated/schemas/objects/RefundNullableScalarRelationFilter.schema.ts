import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './RefundWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => RefundWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => RefundWhereInputObjectSchema).optional().nullable()
}).strict();
export const RefundNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.RefundNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RefundNullableScalarRelationFilter>;
export const RefundNullableScalarRelationFilterObjectZodSchema = makeSchema();
