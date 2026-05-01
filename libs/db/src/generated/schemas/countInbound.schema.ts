import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundOrderByWithRelationInputObjectSchema as InboundOrderByWithRelationInputObjectSchema } from './objects/InboundOrderByWithRelationInput.schema';
import { InboundWhereInputObjectSchema as InboundWhereInputObjectSchema } from './objects/InboundWhereInput.schema';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './objects/InboundWhereUniqueInput.schema';
import { InboundCountAggregateInputObjectSchema as InboundCountAggregateInputObjectSchema } from './objects/InboundCountAggregateInput.schema';

export const InboundCountSchema: z.ZodType<Prisma.InboundCountArgs> = z.object({ orderBy: z.union([InboundOrderByWithRelationInputObjectSchema, InboundOrderByWithRelationInputObjectSchema.array()]).optional(), where: InboundWhereInputObjectSchema.optional(), cursor: InboundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), InboundCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.InboundCountArgs>;

export const InboundCountZodSchema = z.object({ orderBy: z.union([InboundOrderByWithRelationInputObjectSchema, InboundOrderByWithRelationInputObjectSchema.array()]).optional(), where: InboundWhereInputObjectSchema.optional(), cursor: InboundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), InboundCountAggregateInputObjectSchema ]).optional() }).strict();