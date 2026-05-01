import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletSelectObjectSchema as WalletSelectObjectSchema } from './objects/WalletSelect.schema';
import { WalletIncludeObjectSchema as WalletIncludeObjectSchema } from './objects/WalletInclude.schema';
import { WalletUpdateInputObjectSchema as WalletUpdateInputObjectSchema } from './objects/WalletUpdateInput.schema';
import { WalletUncheckedUpdateInputObjectSchema as WalletUncheckedUpdateInputObjectSchema } from './objects/WalletUncheckedUpdateInput.schema';
import { WalletWhereUniqueInputObjectSchema as WalletWhereUniqueInputObjectSchema } from './objects/WalletWhereUniqueInput.schema';

export const WalletUpdateOneSchema: z.ZodType<Prisma.WalletUpdateArgs> = z.object({ select: WalletSelectObjectSchema.optional(), include: WalletIncludeObjectSchema.optional(), data: z.union([WalletUpdateInputObjectSchema, WalletUncheckedUpdateInputObjectSchema]), where: WalletWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WalletUpdateArgs>;

export const WalletUpdateOneZodSchema = z.object({ select: WalletSelectObjectSchema.optional(), include: WalletIncludeObjectSchema.optional(), data: z.union([WalletUpdateInputObjectSchema, WalletUncheckedUpdateInputObjectSchema]), where: WalletWhereUniqueInputObjectSchema }).strict();