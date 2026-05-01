import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletSelectObjectSchema as WalletSelectObjectSchema } from './objects/WalletSelect.schema';
import { WalletCreateManyInputObjectSchema as WalletCreateManyInputObjectSchema } from './objects/WalletCreateManyInput.schema';

export const WalletCreateManyAndReturnSchema: z.ZodType<Prisma.WalletCreateManyAndReturnArgs> = z.object({ select: WalletSelectObjectSchema.optional(), data: z.union([ WalletCreateManyInputObjectSchema, z.array(WalletCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WalletCreateManyAndReturnArgs>;

export const WalletCreateManyAndReturnZodSchema = z.object({ select: WalletSelectObjectSchema.optional(), data: z.union([ WalletCreateManyInputObjectSchema, z.array(WalletCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();