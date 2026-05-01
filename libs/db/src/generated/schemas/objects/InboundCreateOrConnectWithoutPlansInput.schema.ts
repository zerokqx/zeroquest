import * as z from 'zod';
import type { Prisma } from '../../client';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './InboundWhereUniqueInput.schema';
import { InboundCreateWithoutPlansInputObjectSchema as InboundCreateWithoutPlansInputObjectSchema } from './InboundCreateWithoutPlansInput.schema';
import { InboundUncheckedCreateWithoutPlansInputObjectSchema as InboundUncheckedCreateWithoutPlansInputObjectSchema } from './InboundUncheckedCreateWithoutPlansInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => InboundWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => InboundCreateWithoutPlansInputObjectSchema), z.lazy(() => InboundUncheckedCreateWithoutPlansInputObjectSchema)])
}).strict();
export const InboundCreateOrConnectWithoutPlansInputObjectSchema: z.ZodType<Prisma.InboundCreateOrConnectWithoutPlansInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundCreateOrConnectWithoutPlansInput>;
export const InboundCreateOrConnectWithoutPlansInputObjectZodSchema = makeSchema();
