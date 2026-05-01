import * as z from 'zod';
import type { Prisma } from '../../client';
import { InboundCreateWithoutPlansInputObjectSchema as InboundCreateWithoutPlansInputObjectSchema } from './InboundCreateWithoutPlansInput.schema';
import { InboundUncheckedCreateWithoutPlansInputObjectSchema as InboundUncheckedCreateWithoutPlansInputObjectSchema } from './InboundUncheckedCreateWithoutPlansInput.schema';
import { InboundCreateOrConnectWithoutPlansInputObjectSchema as InboundCreateOrConnectWithoutPlansInputObjectSchema } from './InboundCreateOrConnectWithoutPlansInput.schema';
import { InboundUpsertWithoutPlansInputObjectSchema as InboundUpsertWithoutPlansInputObjectSchema } from './InboundUpsertWithoutPlansInput.schema';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './InboundWhereUniqueInput.schema';
import { InboundUpdateToOneWithWhereWithoutPlansInputObjectSchema as InboundUpdateToOneWithWhereWithoutPlansInputObjectSchema } from './InboundUpdateToOneWithWhereWithoutPlansInput.schema';
import { InboundUpdateWithoutPlansInputObjectSchema as InboundUpdateWithoutPlansInputObjectSchema } from './InboundUpdateWithoutPlansInput.schema';
import { InboundUncheckedUpdateWithoutPlansInputObjectSchema as InboundUncheckedUpdateWithoutPlansInputObjectSchema } from './InboundUncheckedUpdateWithoutPlansInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InboundCreateWithoutPlansInputObjectSchema), z.lazy(() => InboundUncheckedCreateWithoutPlansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => InboundCreateOrConnectWithoutPlansInputObjectSchema).optional(),
  upsert: z.lazy(() => InboundUpsertWithoutPlansInputObjectSchema).optional(),
  connect: z.lazy(() => InboundWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => InboundUpdateToOneWithWhereWithoutPlansInputObjectSchema), z.lazy(() => InboundUpdateWithoutPlansInputObjectSchema), z.lazy(() => InboundUncheckedUpdateWithoutPlansInputObjectSchema)]).optional()
}).strict();
export const InboundUpdateOneRequiredWithoutPlansNestedInputObjectSchema: z.ZodType<Prisma.InboundUpdateOneRequiredWithoutPlansNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundUpdateOneRequiredWithoutPlansNestedInput>;
export const InboundUpdateOneRequiredWithoutPlansNestedInputObjectZodSchema = makeSchema();
