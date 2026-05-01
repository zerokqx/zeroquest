import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundOrderByWithRelationInputObjectSchema as RefundOrderByWithRelationInputObjectSchema } from './objects/RefundOrderByWithRelationInput.schema';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './objects/RefundWhereInput.schema';
import { RefundWhereUniqueInputObjectSchema as RefundWhereUniqueInputObjectSchema } from './objects/RefundWhereUniqueInput.schema';
import { RefundCountAggregateInputObjectSchema as RefundCountAggregateInputObjectSchema } from './objects/RefundCountAggregateInput.schema';

export const RefundCountSchema: z.ZodType<Prisma.RefundCountArgs> = z.object({ orderBy: z.union([RefundOrderByWithRelationInputObjectSchema, RefundOrderByWithRelationInputObjectSchema.array()]).optional(), where: RefundWhereInputObjectSchema.optional(), cursor: RefundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RefundCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RefundCountArgs>;

export const RefundCountZodSchema = z.object({ orderBy: z.union([RefundOrderByWithRelationInputObjectSchema, RefundOrderByWithRelationInputObjectSchema.array()]).optional(), where: RefundWhereInputObjectSchema.optional(), cursor: RefundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RefundCountAggregateInputObjectSchema ]).optional() }).strict();