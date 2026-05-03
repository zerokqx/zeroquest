import type { Prisma } from '../client';
import * as z from 'zod';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './objects/IpWhereInput.schema';
import { IpOrderByWithAggregationInputObjectSchema as IpOrderByWithAggregationInputObjectSchema } from './objects/IpOrderByWithAggregationInput.schema';
import { IpScalarWhereWithAggregatesInputObjectSchema as IpScalarWhereWithAggregatesInputObjectSchema } from './objects/IpScalarWhereWithAggregatesInput.schema';
import { IpScalarFieldEnumSchema } from './enums/IpScalarFieldEnum.schema';
import { IpCountAggregateInputObjectSchema as IpCountAggregateInputObjectSchema } from './objects/IpCountAggregateInput.schema';
import { IpMinAggregateInputObjectSchema as IpMinAggregateInputObjectSchema } from './objects/IpMinAggregateInput.schema';
import { IpMaxAggregateInputObjectSchema as IpMaxAggregateInputObjectSchema } from './objects/IpMaxAggregateInput.schema';
import { IpAvgAggregateInputObjectSchema as IpAvgAggregateInputObjectSchema } from './objects/IpAvgAggregateInput.schema';
import { IpSumAggregateInputObjectSchema as IpSumAggregateInputObjectSchema } from './objects/IpSumAggregateInput.schema';

export const IpGroupBySchema: z.ZodType<Prisma.IpGroupByArgs> = z.object({ where: IpWhereInputObjectSchema.optional(), orderBy: z.union([IpOrderByWithAggregationInputObjectSchema, IpOrderByWithAggregationInputObjectSchema.array()]).optional(), having: IpScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(IpScalarFieldEnumSchema), _count: z.union([ z.literal(true), IpCountAggregateInputObjectSchema ]).optional(), _min: IpMinAggregateInputObjectSchema.optional(), _max: IpMaxAggregateInputObjectSchema.optional(), _avg: IpAvgAggregateInputObjectSchema.optional(), _sum: IpSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.IpGroupByArgs>;

export const IpGroupByZodSchema = z.object({ where: IpWhereInputObjectSchema.optional(), orderBy: z.union([IpOrderByWithAggregationInputObjectSchema, IpOrderByWithAggregationInputObjectSchema.array()]).optional(), having: IpScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(IpScalarFieldEnumSchema), _count: z.union([ z.literal(true), IpCountAggregateInputObjectSchema ]).optional(), _min: IpMinAggregateInputObjectSchema.optional(), _max: IpMaxAggregateInputObjectSchema.optional(), _avg: IpAvgAggregateInputObjectSchema.optional(), _sum: IpSumAggregateInputObjectSchema.optional() }).strict();