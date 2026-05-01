import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeOrderByWithRelationInputObjectSchema as ClientTypeOrderByWithRelationInputObjectSchema } from './objects/ClientTypeOrderByWithRelationInput.schema';
import { ClientTypeWhereInputObjectSchema as ClientTypeWhereInputObjectSchema } from './objects/ClientTypeWhereInput.schema';
import { ClientTypeWhereUniqueInputObjectSchema as ClientTypeWhereUniqueInputObjectSchema } from './objects/ClientTypeWhereUniqueInput.schema';
import { ClientTypeCountAggregateInputObjectSchema as ClientTypeCountAggregateInputObjectSchema } from './objects/ClientTypeCountAggregateInput.schema';

export const ClientTypeCountSchema: z.ZodType<Prisma.ClientTypeCountArgs> = z.object({ orderBy: z.union([ClientTypeOrderByWithRelationInputObjectSchema, ClientTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientTypeWhereInputObjectSchema.optional(), cursor: ClientTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClientTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientTypeCountArgs>;

export const ClientTypeCountZodSchema = z.object({ orderBy: z.union([ClientTypeOrderByWithRelationInputObjectSchema, ClientTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientTypeWhereInputObjectSchema.optional(), cursor: ClientTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClientTypeCountAggregateInputObjectSchema ]).optional() }).strict();