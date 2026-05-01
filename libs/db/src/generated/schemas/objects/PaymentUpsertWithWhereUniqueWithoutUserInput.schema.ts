import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutUserInputObjectSchema as PaymentUpdateWithoutUserInputObjectSchema } from './PaymentUpdateWithoutUserInput.schema';
import { PaymentUncheckedUpdateWithoutUserInputObjectSchema as PaymentUncheckedUpdateWithoutUserInputObjectSchema } from './PaymentUncheckedUpdateWithoutUserInput.schema';
import { PaymentCreateWithoutUserInputObjectSchema as PaymentCreateWithoutUserInputObjectSchema } from './PaymentCreateWithoutUserInput.schema';
import { PaymentUncheckedCreateWithoutUserInputObjectSchema as PaymentUncheckedCreateWithoutUserInputObjectSchema } from './PaymentUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PaymentUpdateWithoutUserInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => PaymentCreateWithoutUserInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PaymentUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutUserInput>;
export const PaymentUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
