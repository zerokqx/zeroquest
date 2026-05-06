import type { Prisma } from '../client';
import * as z from 'zod';
import { IpSelectObjectSchema as IpSelectObjectSchema } from './objects/IpSelect.schema';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './objects/IpWhereUniqueInput.schema';
import { IpCreateInputObjectSchema as IpCreateInputObjectSchema } from './objects/IpCreateInput.schema';
import { IpUncheckedCreateInputObjectSchema as IpUncheckedCreateInputObjectSchema } from './objects/IpUncheckedCreateInput.schema';
import { IpUpdateInputObjectSchema as IpUpdateInputObjectSchema } from './objects/IpUpdateInput.schema';
import { IpUncheckedUpdateInputObjectSchema as IpUncheckedUpdateInputObjectSchema } from './objects/IpUncheckedUpdateInput.schema';

export const IpUpsertOneSchema: z.ZodType<Prisma.IpUpsertArgs> = z.object({ select: IpSelectObjectSchema.optional(),  where: IpWhereUniqueInputObjectSchema, create: z.union([ IpCreateInputObjectSchema, IpUncheckedCreateInputObjectSchema ]), update: z.union([ IpUpdateInputObjectSchema, IpUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.IpUpsertArgs>;

export const IpUpsertOneZodSchema = z.object({ select: IpSelectObjectSchema.optional(),  where: IpWhereUniqueInputObjectSchema, create: z.union([ IpCreateInputObjectSchema, IpUncheckedCreateInputObjectSchema ]), update: z.union([ IpUpdateInputObjectSchema, IpUncheckedUpdateInputObjectSchema ]) }).strict();