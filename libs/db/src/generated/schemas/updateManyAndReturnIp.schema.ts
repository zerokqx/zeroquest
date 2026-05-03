import type { Prisma } from '../client';
import * as z from 'zod';
import { IpSelectObjectSchema as IpSelectObjectSchema } from './objects/IpSelect.schema';
import { IpUpdateManyMutationInputObjectSchema as IpUpdateManyMutationInputObjectSchema } from './objects/IpUpdateManyMutationInput.schema';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './objects/IpWhereInput.schema';

export const IpUpdateManyAndReturnSchema: z.ZodType<Prisma.IpUpdateManyAndReturnArgs> = z.object({ select: IpSelectObjectSchema.optional(), data: IpUpdateManyMutationInputObjectSchema, where: IpWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.IpUpdateManyAndReturnArgs>;

export const IpUpdateManyAndReturnZodSchema = z.object({ select: IpSelectObjectSchema.optional(), data: IpUpdateManyMutationInputObjectSchema, where: IpWhereInputObjectSchema.optional() }).strict();