import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutUserInputObjectSchema as PaymentUpdateWithoutUserInputObjectSchema } from './PaymentUpdateWithoutUserInput.schema';
import { PaymentUncheckedUpdateWithoutUserInputObjectSchema as PaymentUncheckedUpdateWithoutUserInputObjectSchema } from './PaymentUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateWithoutUserInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const PaymentUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutUserInput>;
export const PaymentUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
