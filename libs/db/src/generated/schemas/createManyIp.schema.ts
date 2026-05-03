import type { Prisma } from '../client';
import * as z from 'zod';
import { IpCreateManyInputObjectSchema as IpCreateManyInputObjectSchema } from './objects/IpCreateManyInput.schema';

export const IpCreateManySchema: z.ZodType<Prisma.IpCreateManyArgs> = z.object({ data: z.union([ IpCreateManyInputObjectSchema, z.array(IpCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.IpCreateManyArgs>;

export const IpCreateManyZodSchema = z.object({ data: z.union([ IpCreateManyInputObjectSchema, z.array(IpCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();