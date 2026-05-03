import type { Prisma } from '../client';
import * as z from 'zod';
import { IpOrderByWithRelationInputObjectSchema as IpOrderByWithRelationInputObjectSchema } from './objects/IpOrderByWithRelationInput.schema';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './objects/IpWhereInput.schema';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './objects/IpWhereUniqueInput.schema';
import { IpCountAggregateInputObjectSchema as IpCountAggregateInputObjectSchema } from './objects/IpCountAggregateInput.schema';
import { IpMinAggregateInputObjectSchema as IpMinAggregateInputObjectSchema } from './objects/IpMinAggregateInput.schema';
import { IpMaxAggregateInputObjectSchema as IpMaxAggregateInputObjectSchema } from './objects/IpMaxAggregateInput.schema';
import { IpAvgAggregateInputObjectSchema as IpAvgAggregateInputObjectSchema } from './objects/IpAvgAggregateInput.schema';
import { IpSumAggregateInputObjectSchema as IpSumAggregateInputObjectSchema } from './objects/IpSumAggregateInput.schema';

export const IpAggregateSchema: z.ZodType<Prisma.IpAggregateArgs> = z.object({ orderBy: z.union([IpOrderByWithRelationInputObjectSchema, IpOrderByWithRelationInputObjectSchema.array()]).optional(), where: IpWhereInputObjectSchema.optional(), cursor: IpWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), IpCountAggregateInputObjectSchema ]).optional(), _min: IpMinAggregateInputObjectSchema.optional(), _max: IpMaxAggregateInputObjectSchema.optional(), _avg: IpAvgAggregateInputObjectSchema.optional(), _sum: IpSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.IpAggregateArgs>;

export const IpAggregateZodSchema = z.object({ orderBy: z.union([IpOrderByWithRelationInputObjectSchema, IpOrderByWithRelationInputObjectSchema.array()]).optional(), where: IpWhereInputObjectSchema.optional(), cursor: IpWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), IpCountAggregateInputObjectSchema ]).optional(), _min: IpMinAggregateInputObjectSchema.optional(), _max: IpMaxAggregateInputObjectSchema.optional(), _avg: IpAvgAggregateInputObjectSchema.optional(), _sum: IpSumAggregateInputObjectSchema.optional() }).strict();