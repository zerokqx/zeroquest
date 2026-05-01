import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeOrderByWithRelationInputObjectSchema as SubscribeOrderByWithRelationInputObjectSchema } from './objects/SubscribeOrderByWithRelationInput.schema';
import { SubscribeWhereInputObjectSchema as SubscribeWhereInputObjectSchema } from './objects/SubscribeWhereInput.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './objects/SubscribeWhereUniqueInput.schema';
import { SubscribeCountAggregateInputObjectSchema as SubscribeCountAggregateInputObjectSchema } from './objects/SubscribeCountAggregateInput.schema';

export const SubscribeCountSchema: z.ZodType<Prisma.SubscribeCountArgs> = z.object({ orderBy: z.union([SubscribeOrderByWithRelationInputObjectSchema, SubscribeOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscribeWhereInputObjectSchema.optional(), cursor: SubscribeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SubscribeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SubscribeCountArgs>;

export const SubscribeCountZodSchema = z.object({ orderBy: z.union([SubscribeOrderByWithRelationInputObjectSchema, SubscribeOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscribeWhereInputObjectSchema.optional(), cursor: SubscribeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SubscribeCountAggregateInputObjectSchema ]).optional() }).strict();