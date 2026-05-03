import type { Prisma } from '../client';
import * as z from 'zod';
import { IpUpdateManyMutationInputObjectSchema as IpUpdateManyMutationInputObjectSchema } from './objects/IpUpdateManyMutationInput.schema';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './objects/IpWhereInput.schema';

export const IpUpdateManySchema: z.ZodType<Prisma.IpUpdateManyArgs> = z.object({ data: IpUpdateManyMutationInputObjectSchema, where: IpWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.IpUpdateManyArgs>;

export const IpUpdateManyZodSchema = z.object({ data: IpUpdateManyMutationInputObjectSchema, where: IpWhereInputObjectSchema.optional() }).strict();