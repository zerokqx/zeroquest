import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { LegalDocumentOrderByWithRelationInputObjectSchema as LegalDocumentOrderByWithRelationInputObjectSchema } from './LegalDocumentOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  legalDocumentId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  legalDocument: z.lazy(() => LegalDocumentOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const LegalAcceptancesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesOrderByWithRelationInput>;
export const LegalAcceptancesOrderByWithRelationInputObjectZodSchema = makeSchema();
