import * as z from 'zod';
import type { Prisma } from '../../client';
import { InboundWhereInputObjectSchema as InboundWhereInputObjectSchema } from './InboundWhereInput.schema';
import { InboundUpdateWithoutPlansInputObjectSchema as InboundUpdateWithoutPlansInputObjectSchema } from './InboundUpdateWithoutPlansInput.schema';
import { InboundUncheckedUpdateWithoutPlansInputObjectSchema as InboundUncheckedUpdateWithoutPlansInputObjectSchema } from './InboundUncheckedUpdateWithoutPlansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InboundWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => InboundUpdateWithoutPlansInputObjectSchema), z.lazy(() => InboundUncheckedUpdateWithoutPlansInputObjectSchema)])
}).strict();
export const InboundUpdateToOneWithWhereWithoutPlansInputObjectSchema: z.ZodType<Prisma.InboundUpdateToOneWithWhereWithoutPlansInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundUpdateToOneWithWhereWithoutPlansInput>;
export const InboundUpdateToOneWithWhereWithoutPlansInputObjectZodSchema = makeSchema();
