import type { Prisma } from '../client';
import * as z from 'zod';
import { IpSelectObjectSchema as IpSelectObjectSchema } from './objects/IpSelect.schema';
import { IpIncludeObjectSchema as IpIncludeObjectSchema } from './objects/IpInclude.schema';
import { IpCreateInputObjectSchema as IpCreateInputObjectSchema } from './objects/IpCreateInput.schema';
import { IpUncheckedCreateInputObjectSchema as IpUncheckedCreateInputObjectSchema } from './objects/IpUncheckedCreateInput.schema';

export const IpCreateOneSchema: z.ZodType<Prisma.IpCreateArgs> = z.object({ select: IpSelectObjectSchema.optional(), include: IpIncludeObjectSchema.optional(), data: z.union([IpCreateInputObjectSchema, IpUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.IpCreateArgs>;

export const IpCreateOneZodSchema = z.object({ select: IpSelectObjectSchema.optional(), include: IpIncludeObjectSchema.optional(), data: z.union([IpCreateInputObjectSchema, IpUncheckedCreateInputObjectSchema]) }).strict();