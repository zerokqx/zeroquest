import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesWhereInputObjectSchema as LegalAcceptancesWhereInputObjectSchema } from './LegalAcceptancesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => LegalAcceptancesWhereInputObjectSchema).optional(),
  some: z.lazy(() => LegalAcceptancesWhereInputObjectSchema).optional(),
  none: z.lazy(() => LegalAcceptancesWhereInputObjectSchema).optional()
}).strict();
export const LegalAcceptancesListRelationFilterObjectSchema: z.ZodType<Prisma.LegalAcceptancesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesListRelationFilter>;
export const LegalAcceptancesListRelationFilterObjectZodSchema = makeSchema();
