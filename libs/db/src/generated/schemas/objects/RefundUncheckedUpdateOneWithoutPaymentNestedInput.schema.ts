import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundCreateWithoutPaymentInputObjectSchema as RefundCreateWithoutPaymentInputObjectSchema } from './RefundCreateWithoutPaymentInput.schema';
import { RefundUncheckedCreateWithoutPaymentInputObjectSchema as RefundUncheckedCreateWithoutPaymentInputObjectSchema } from './RefundUncheckedCreateWithoutPaymentInput.schema';
import { RefundCreateOrConnectWithoutPaymentInputObjectSchema as RefundCreateOrConnectWithoutPaymentInputObjectSchema } from './RefundCreateOrConnectWithoutPaymentInput.schema';
import { RefundUpsertWithoutPaymentInputObjectSchema as RefundUpsertWithoutPaymentInputObjectSchema } from './RefundUpsertWithoutPaymentInput.schema';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './RefundWhereInput.schema';
import { RefundWhereUniqueInputObjectSchema as RefundWhereUniqueInputObjectSchema } from './RefundWhereUniqueInput.schema';
import { RefundUpdateToOneWithWhereWithoutPaymentInputObjectSchema as RefundUpdateToOneWithWhereWithoutPaymentInputObjectSchema } from './RefundUpdateToOneWithWhereWithoutPaymentInput.schema';
import { RefundUpdateWithoutPaymentInputObjectSchema as RefundUpdateWithoutPaymentInputObjectSchema } from './RefundUpdateWithoutPaymentInput.schema';
import { RefundUncheckedUpdateWithoutPaymentInputObjectSchema as RefundUncheckedUpdateWithoutPaymentInputObjectSchema } from './RefundUncheckedUpdateWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RefundCreateWithoutPaymentInputObjectSchema), z.lazy(() => RefundUncheckedCreateWithoutPaymentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RefundCreateOrConnectWithoutPaymentInputObjectSchema).optional(),
  upsert: z.lazy(() => RefundUpsertWithoutPaymentInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => RefundWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => RefundWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => RefundWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RefundUpdateToOneWithWhereWithoutPaymentInputObjectSchema), z.lazy(() => RefundUpdateWithoutPaymentInputObjectSchema), z.lazy(() => RefundUncheckedUpdateWithoutPaymentInputObjectSchema)]).optional()
}).strict();
export const RefundUncheckedUpdateOneWithoutPaymentNestedInputObjectSchema: z.ZodType<Prisma.RefundUncheckedUpdateOneWithoutPaymentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundUncheckedUpdateOneWithoutPaymentNestedInput>;
export const RefundUncheckedUpdateOneWithoutPaymentNestedInputObjectZodSchema = makeSchema();
