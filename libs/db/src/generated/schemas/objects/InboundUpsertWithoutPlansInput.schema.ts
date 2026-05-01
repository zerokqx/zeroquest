import * as z from 'zod';
import type { Prisma } from '../../client';
import { InboundUpdateWithoutPlansInputObjectSchema as InboundUpdateWithoutPlansInputObjectSchema } from './InboundUpdateWithoutPlansInput.schema';
import { InboundUncheckedUpdateWithoutPlansInputObjectSchema as InboundUncheckedUpdateWithoutPlansInputObjectSchema } from './InboundUncheckedUpdateWithoutPlansInput.schema';
import { InboundCreateWithoutPlansInputObjectSchema as InboundCreateWithoutPlansInputObjectSchema } from './InboundCreateWithoutPlansInput.schema';
import { InboundUncheckedCreateWithoutPlansInputObjectSchema as InboundUncheckedCreateWithoutPlansInputObjectSchema } from './InboundUncheckedCreateWithoutPlansInput.schema';
import { InboundWhereInputObjectSchema as InboundWhereInputObjectSchema } from './InboundWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => InboundUpdateWithoutPlansInputObjectSchema), z.lazy(() => InboundUncheckedUpdateWithoutPlansInputObjectSchema)]),
  create: z.union([z.lazy(() => InboundCreateWithoutPlansInputObjectSchema), z.lazy(() => InboundUncheckedCreateWithoutPlansInputObjectSchema)]),
  where: z.lazy(() => InboundWhereInputObjectSchema).optional()
}).strict();
export const InboundUpsertWithoutPlansInputObjectSchema: z.ZodType<Prisma.InboundUpsertWithoutPlansInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundUpsertWithoutPlansInput>;
export const InboundUpsertWithoutPlansInputObjectZodSchema = makeSchema();
