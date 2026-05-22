import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaOrderByWithRelationInputObjectSchema as TotpMfaOrderByWithRelationInputObjectSchema } from './objects/TotpMfaOrderByWithRelationInput.schema';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './objects/TotpMfaWhereInput.schema';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './objects/TotpMfaWhereUniqueInput.schema';
import { TotpMfaCountAggregateInputObjectSchema as TotpMfaCountAggregateInputObjectSchema } from './objects/TotpMfaCountAggregateInput.schema';

export const TotpMfaCountSchema: z.ZodType<Prisma.TotpMfaCountArgs> = z.object({ orderBy: z.union([TotpMfaOrderByWithRelationInputObjectSchema, TotpMfaOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpMfaWhereInputObjectSchema.optional(), cursor: TotpMfaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TotpMfaCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TotpMfaCountArgs>;

export const TotpMfaCountZodSchema = z.object({ orderBy: z.union([TotpMfaOrderByWithRelationInputObjectSchema, TotpMfaOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpMfaWhereInputObjectSchema.optional(), cursor: TotpMfaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TotpMfaCountAggregateInputObjectSchema ]).optional() }).strict();