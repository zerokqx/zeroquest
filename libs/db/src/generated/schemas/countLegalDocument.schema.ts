import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentOrderByWithRelationInputObjectSchema as LegalDocumentOrderByWithRelationInputObjectSchema } from './objects/LegalDocumentOrderByWithRelationInput.schema';
import { LegalDocumentWhereInputObjectSchema as LegalDocumentWhereInputObjectSchema } from './objects/LegalDocumentWhereInput.schema';
import { LegalDocumentWhereUniqueInputObjectSchema as LegalDocumentWhereUniqueInputObjectSchema } from './objects/LegalDocumentWhereUniqueInput.schema';
import { LegalDocumentCountAggregateInputObjectSchema as LegalDocumentCountAggregateInputObjectSchema } from './objects/LegalDocumentCountAggregateInput.schema';

export const LegalDocumentCountSchema: z.ZodType<Prisma.LegalDocumentCountArgs> = z.object({ orderBy: z.union([LegalDocumentOrderByWithRelationInputObjectSchema, LegalDocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: LegalDocumentWhereInputObjectSchema.optional(), cursor: LegalDocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LegalDocumentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LegalDocumentCountArgs>;

export const LegalDocumentCountZodSchema = z.object({ orderBy: z.union([LegalDocumentOrderByWithRelationInputObjectSchema, LegalDocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: LegalDocumentWhereInputObjectSchema.optional(), cursor: LegalDocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LegalDocumentCountAggregateInputObjectSchema ]).optional() }).strict();