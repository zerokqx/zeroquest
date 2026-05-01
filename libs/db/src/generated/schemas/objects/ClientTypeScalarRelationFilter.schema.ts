import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeWhereInputObjectSchema as ClientTypeWhereInputObjectSchema } from './ClientTypeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ClientTypeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ClientTypeWhereInputObjectSchema).optional()
}).strict();
export const ClientTypeScalarRelationFilterObjectSchema: z.ZodType<Prisma.ClientTypeScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeScalarRelationFilter>;
export const ClientTypeScalarRelationFilterObjectZodSchema = makeSchema();
