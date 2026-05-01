import * as z from 'zod';
import type { Prisma } from '../../client';
import { InboundWhereInputObjectSchema as InboundWhereInputObjectSchema } from './InboundWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => InboundWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => InboundWhereInputObjectSchema).optional()
}).strict();
export const InboundScalarRelationFilterObjectSchema: z.ZodType<Prisma.InboundScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.InboundScalarRelationFilter>;
export const InboundScalarRelationFilterObjectZodSchema = makeSchema();
