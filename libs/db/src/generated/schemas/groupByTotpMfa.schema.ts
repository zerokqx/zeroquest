import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './objects/TotpMfaWhereInput.schema';
import { TotpMfaOrderByWithAggregationInputObjectSchema as TotpMfaOrderByWithAggregationInputObjectSchema } from './objects/TotpMfaOrderByWithAggregationInput.schema';
import { TotpMfaScalarWhereWithAggregatesInputObjectSchema as TotpMfaScalarWhereWithAggregatesInputObjectSchema } from './objects/TotpMfaScalarWhereWithAggregatesInput.schema';
import { TotpMfaScalarFieldEnumSchema } from './enums/TotpMfaScalarFieldEnum.schema';
import { TotpMfaCountAggregateInputObjectSchema as TotpMfaCountAggregateInputObjectSchema } from './objects/TotpMfaCountAggregateInput.schema';
import { TotpMfaMinAggregateInputObjectSchema as TotpMfaMinAggregateInputObjectSchema } from './objects/TotpMfaMinAggregateInput.schema';
import { TotpMfaMaxAggregateInputObjectSchema as TotpMfaMaxAggregateInputObjectSchema } from './objects/TotpMfaMaxAggregateInput.schema';

export const TotpMfaGroupBySchema: z.ZodType<Prisma.TotpMfaGroupByArgs> = z.object({ where: TotpMfaWhereInputObjectSchema.optional(), orderBy: z.union([TotpMfaOrderByWithAggregationInputObjectSchema, TotpMfaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TotpMfaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TotpMfaScalarFieldEnumSchema), _count: z.union([ z.literal(true), TotpMfaCountAggregateInputObjectSchema ]).optional(), _min: TotpMfaMinAggregateInputObjectSchema.optional(), _max: TotpMfaMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TotpMfaGroupByArgs>;

export const TotpMfaGroupByZodSchema = z.object({ where: TotpMfaWhereInputObjectSchema.optional(), orderBy: z.union([TotpMfaOrderByWithAggregationInputObjectSchema, TotpMfaOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TotpMfaScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TotpMfaScalarFieldEnumSchema), _count: z.union([ z.literal(true), TotpMfaCountAggregateInputObjectSchema ]).optional(), _min: TotpMfaMinAggregateInputObjectSchema.optional(), _max: TotpMfaMaxAggregateInputObjectSchema.optional() }).strict();