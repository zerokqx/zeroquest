import * as z from 'zod';
import type { Prisma } from '../../client';
import { InboundCreateWithoutPlansInputObjectSchema as InboundCreateWithoutPlansInputObjectSchema } from './InboundCreateWithoutPlansInput.schema';
import { InboundUncheckedCreateWithoutPlansInputObjectSchema as InboundUncheckedCreateWithoutPlansInputObjectSchema } from './InboundUncheckedCreateWithoutPlansInput.schema';
import { InboundCreateOrConnectWithoutPlansInputObjectSchema as InboundCreateOrConnectWithoutPlansInputObjectSchema } from './InboundCreateOrConnectWithoutPlansInput.schema';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './InboundWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => InboundCreateWithoutPlansInputObjectSchema), z.lazy(() => InboundUncheckedCreateWithoutPlansInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => InboundCreateOrConnectWithoutPlansInputObjectSchema).optional(),
  connect: z.lazy(() => InboundWhereUniqueInputObjectSchema).optional()
}).strict();
export const InboundCreateNestedOneWithoutPlansInputObjectSchema: z.ZodType<Prisma.InboundCreateNestedOneWithoutPlansInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundCreateNestedOneWithoutPlansInput>;
export const InboundCreateNestedOneWithoutPlansInputObjectZodSchema = makeSchema();
