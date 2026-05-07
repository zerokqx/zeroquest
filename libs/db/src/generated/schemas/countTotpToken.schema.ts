import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenOrderByWithRelationInputObjectSchema as TotpTokenOrderByWithRelationInputObjectSchema } from './objects/TotpTokenOrderByWithRelationInput.schema';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './objects/TotpTokenWhereInput.schema';
import { TotpTokenWhereUniqueInputObjectSchema as TotpTokenWhereUniqueInputObjectSchema } from './objects/TotpTokenWhereUniqueInput.schema';
import { TotpTokenCountAggregateInputObjectSchema as TotpTokenCountAggregateInputObjectSchema } from './objects/TotpTokenCountAggregateInput.schema';

export const TotpTokenCountSchema: z.ZodType<Prisma.TotpTokenCountArgs> = z.object({ orderBy: z.union([TotpTokenOrderByWithRelationInputObjectSchema, TotpTokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpTokenWhereInputObjectSchema.optional(), cursor: TotpTokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TotpTokenCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TotpTokenCountArgs>;

export const TotpTokenCountZodSchema = z.object({ orderBy: z.union([TotpTokenOrderByWithRelationInputObjectSchema, TotpTokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpTokenWhereInputObjectSchema.optional(), cursor: TotpTokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TotpTokenCountAggregateInputObjectSchema ]).optional() }).strict();