import type { Prisma } from '../client';
import * as z from 'zod';
import { IpOrderByWithRelationInputObjectSchema as IpOrderByWithRelationInputObjectSchema } from './objects/IpOrderByWithRelationInput.schema';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './objects/IpWhereInput.schema';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './objects/IpWhereUniqueInput.schema';
import { IpCountAggregateInputObjectSchema as IpCountAggregateInputObjectSchema } from './objects/IpCountAggregateInput.schema';

export const IpCountSchema: z.ZodType<Prisma.IpCountArgs> = z.object({ orderBy: z.union([IpOrderByWithRelationInputObjectSchema, IpOrderByWithRelationInputObjectSchema.array()]).optional(), where: IpWhereInputObjectSchema.optional(), cursor: IpWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), IpCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.IpCountArgs>;

export const IpCountZodSchema = z.object({ orderBy: z.union([IpOrderByWithRelationInputObjectSchema, IpOrderByWithRelationInputObjectSchema.array()]).optional(), where: IpWhereInputObjectSchema.optional(), cursor: IpWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), IpCountAggregateInputObjectSchema ]).optional() }).strict();