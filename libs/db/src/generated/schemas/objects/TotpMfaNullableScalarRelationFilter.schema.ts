import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './TotpMfaWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TotpMfaWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TotpMfaWhereInputObjectSchema).optional().nullable()
}).strict();
export const TotpMfaNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TotpMfaNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaNullableScalarRelationFilter>;
export const TotpMfaNullableScalarRelationFilterObjectZodSchema = makeSchema();
