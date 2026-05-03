import type { Prisma } from '../client';
import * as z from 'zod';
import { IpSelectObjectSchema as IpSelectObjectSchema } from './objects/IpSelect.schema';
import { IpCreateManyInputObjectSchema as IpCreateManyInputObjectSchema } from './objects/IpCreateManyInput.schema';

export const IpCreateManyAndReturnSchema: z.ZodType<Prisma.IpCreateManyAndReturnArgs> = z.object({ select: IpSelectObjectSchema.optional(), data: z.union([ IpCreateManyInputObjectSchema, z.array(IpCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.IpCreateManyAndReturnArgs>;

export const IpCreateManyAndReturnZodSchema = z.object({ select: IpSelectObjectSchema.optional(), data: z.union([ IpCreateManyInputObjectSchema, z.array(IpCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();