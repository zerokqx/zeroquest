import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaOrderByWithRelationInputObjectSchema as TotpMfaOrderByWithRelationInputObjectSchema } from './objects/TotpMfaOrderByWithRelationInput.schema';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './objects/TotpMfaWhereInput.schema';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './objects/TotpMfaWhereUniqueInput.schema';
import { TotpMfaCountAggregateInputObjectSchema as TotpMfaCountAggregateInputObjectSchema } from './objects/TotpMfaCountAggregateInput.schema';
import { TotpMfaMinAggregateInputObjectSchema as TotpMfaMinAggregateInputObjectSchema } from './objects/TotpMfaMinAggregateInput.schema';
import { TotpMfaMaxAggregateInputObjectSchema as TotpMfaMaxAggregateInputObjectSchema } from './objects/TotpMfaMaxAggregateInput.schema';

export const TotpMfaAggregateSchema: z.ZodType<Prisma.TotpMfaAggregateArgs> = z.object({ orderBy: z.union([TotpMfaOrderByWithRelationInputObjectSchema, TotpMfaOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpMfaWhereInputObjectSchema.optional(), cursor: TotpMfaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TotpMfaCountAggregateInputObjectSchema ]).optional(), _min: TotpMfaMinAggregateInputObjectSchema.optional(), _max: TotpMfaMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TotpMfaAggregateArgs>;

export const TotpMfaAggregateZodSchema = z.object({ orderBy: z.union([TotpMfaOrderByWithRelationInputObjectSchema, TotpMfaOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpMfaWhereInputObjectSchema.optional(), cursor: TotpMfaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TotpMfaCountAggregateInputObjectSchema ]).optional(), _min: TotpMfaMinAggregateInputObjectSchema.optional(), _max: TotpMfaMaxAggregateInputObjectSchema.optional() }).strict();