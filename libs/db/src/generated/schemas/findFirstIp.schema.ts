import type { Prisma } from '../client';
import * as z from 'zod';
import { IpOrderByWithRelationInputObjectSchema as IpOrderByWithRelationInputObjectSchema } from './objects/IpOrderByWithRelationInput.schema';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './objects/IpWhereInput.schema';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './objects/IpWhereUniqueInput.schema';
import { IpScalarFieldEnumSchema } from './enums/IpScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IpFindFirstSelectSchema: z.ZodType<Prisma.IpSelect> = z.object({
    id: z.boolean().optional(),
    ip: z.boolean().optional(),
    rangeLow: z.boolean().optional(),
    rangeHigh: z.boolean().optional(),
    country: z.boolean().optional(),
    region: z.boolean().optional(),
    eu: z.boolean().optional(),
    timezone: z.boolean().optional(),
    city: z.boolean().optional(),
    ll: z.boolean().optional(),
    metro: z.boolean().optional(),
    area: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.IpSelect>;

export const IpFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    ip: z.boolean().optional(),
    rangeLow: z.boolean().optional(),
    rangeHigh: z.boolean().optional(),
    country: z.boolean().optional(),
    region: z.boolean().optional(),
    eu: z.boolean().optional(),
    timezone: z.boolean().optional(),
    city: z.boolean().optional(),
    ll: z.boolean().optional(),
    metro: z.boolean().optional(),
    area: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const IpFindFirstSchema: z.ZodType<Prisma.IpFindFirstArgs> = z.object({ select: IpFindFirstSelectSchema.optional(),  orderBy: z.union([IpOrderByWithRelationInputObjectSchema, IpOrderByWithRelationInputObjectSchema.array()]).optional(), where: IpWhereInputObjectSchema.optional(), cursor: IpWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([IpScalarFieldEnumSchema, IpScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.IpFindFirstArgs>;

export const IpFindFirstZodSchema = z.object({ select: IpFindFirstSelectSchema.optional(),  orderBy: z.union([IpOrderByWithRelationInputObjectSchema, IpOrderByWithRelationInputObjectSchema.array()]).optional(), where: IpWhereInputObjectSchema.optional(), cursor: IpWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([IpScalarFieldEnumSchema, IpScalarFieldEnumSchema.array()]).optional() }).strict();