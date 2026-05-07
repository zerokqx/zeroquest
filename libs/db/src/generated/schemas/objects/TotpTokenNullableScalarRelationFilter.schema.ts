import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './TotpTokenWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TotpTokenWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TotpTokenWhereInputObjectSchema).optional().nullable()
}).strict();
export const TotpTokenNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TotpTokenNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenNullableScalarRelationFilter>;
export const TotpTokenNullableScalarRelationFilterObjectZodSchema = makeSchema();
