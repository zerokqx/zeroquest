import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletWhereInputObjectSchema as WalletWhereInputObjectSchema } from './WalletWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => WalletWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => WalletWhereInputObjectSchema).optional()
}).strict();
export const WalletScalarRelationFilterObjectSchema: z.ZodType<Prisma.WalletScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WalletScalarRelationFilter>;
export const WalletScalarRelationFilterObjectZodSchema = makeSchema();
