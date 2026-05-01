import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeIncludeObjectSchema as ClientTypeIncludeObjectSchema } from './objects/ClientTypeInclude.schema';
import { ClientTypeOrderByWithRelationInputObjectSchema as ClientTypeOrderByWithRelationInputObjectSchema } from './objects/ClientTypeOrderByWithRelationInput.schema';
import { ClientTypeWhereInputObjectSchema as ClientTypeWhereInputObjectSchema } from './objects/ClientTypeWhereInput.schema';
import { ClientTypeWhereUniqueInputObjectSchema as ClientTypeWhereUniqueInputObjectSchema } from './objects/ClientTypeWhereUniqueInput.schema';
import { ClientTypeScalarFieldEnumSchema } from './enums/ClientTypeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClientTypeFindManySelectSchema: z.ZodType<Prisma.ClientTypeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    sessions: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ClientTypeSelect>;

export const ClientTypeFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    sessions: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ClientTypeFindManySchema: z.ZodType<Prisma.ClientTypeFindManyArgs> = z.object({ select: ClientTypeFindManySelectSchema.optional(), include: z.lazy(() => ClientTypeIncludeObjectSchema.optional()), orderBy: z.union([ClientTypeOrderByWithRelationInputObjectSchema, ClientTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientTypeWhereInputObjectSchema.optional(), cursor: ClientTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientTypeScalarFieldEnumSchema, ClientTypeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientTypeFindManyArgs>;

export const ClientTypeFindManyZodSchema = z.object({ select: ClientTypeFindManySelectSchema.optional(), include: z.lazy(() => ClientTypeIncludeObjectSchema.optional()), orderBy: z.union([ClientTypeOrderByWithRelationInputObjectSchema, ClientTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientTypeWhereInputObjectSchema.optional(), cursor: ClientTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientTypeScalarFieldEnumSchema, ClientTypeScalarFieldEnumSchema.array()]).optional() }).strict();