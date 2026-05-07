import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenOrderByWithRelationInputObjectSchema as TotpTokenOrderByWithRelationInputObjectSchema } from './objects/TotpTokenOrderByWithRelationInput.schema';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './objects/TotpTokenWhereInput.schema';
import { TotpTokenWhereUniqueInputObjectSchema as TotpTokenWhereUniqueInputObjectSchema } from './objects/TotpTokenWhereUniqueInput.schema';
import { TotpTokenCountAggregateInputObjectSchema as TotpTokenCountAggregateInputObjectSchema } from './objects/TotpTokenCountAggregateInput.schema';
import { TotpTokenMinAggregateInputObjectSchema as TotpTokenMinAggregateInputObjectSchema } from './objects/TotpTokenMinAggregateInput.schema';
import { TotpTokenMaxAggregateInputObjectSchema as TotpTokenMaxAggregateInputObjectSchema } from './objects/TotpTokenMaxAggregateInput.schema';

export const TotpTokenAggregateSchema: z.ZodType<Prisma.TotpTokenAggregateArgs> = z.object({ orderBy: z.union([TotpTokenOrderByWithRelationInputObjectSchema, TotpTokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpTokenWhereInputObjectSchema.optional(), cursor: TotpTokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TotpTokenCountAggregateInputObjectSchema ]).optional(), _min: TotpTokenMinAggregateInputObjectSchema.optional(), _max: TotpTokenMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TotpTokenAggregateArgs>;

export const TotpTokenAggregateZodSchema = z.object({ orderBy: z.union([TotpTokenOrderByWithRelationInputObjectSchema, TotpTokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpTokenWhereInputObjectSchema.optional(), cursor: TotpTokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TotpTokenCountAggregateInputObjectSchema ]).optional(), _min: TotpTokenMinAggregateInputObjectSchema.optional(), _max: TotpTokenMaxAggregateInputObjectSchema.optional() }).strict();