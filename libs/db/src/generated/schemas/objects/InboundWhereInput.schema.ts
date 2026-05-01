import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { PlanListRelationFilterObjectSchema as PlanListRelationFilterObjectSchema } from './PlanListRelationFilter.schema'

const inboundwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => InboundWhereInputObjectSchema), z.lazy(() => InboundWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => InboundWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => InboundWhereInputObjectSchema), z.lazy(() => InboundWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  enable: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  inboundId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  plans: z.lazy(() => PlanListRelationFilterObjectSchema).optional()
}).strict();
export const InboundWhereInputObjectSchema: z.ZodType<Prisma.InboundWhereInput> = inboundwhereinputSchema as unknown as z.ZodType<Prisma.InboundWhereInput>;
export const InboundWhereInputObjectZodSchema = inboundwhereinputSchema;
