import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentScalarWhereInputObjectSchema as PaymentScalarWhereInputObjectSchema } from './PaymentScalarWhereInput.schema';
import { PaymentUpdateManyMutationInputObjectSchema as PaymentUpdateManyMutationInputObjectSchema } from './PaymentUpdateManyMutationInput.schema';
import { PaymentUncheckedUpdateManyWithoutUserInputObjectSchema as PaymentUncheckedUpdateManyWithoutUserInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateManyMutationInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const PaymentUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateManyWithWhereWithoutUserInput>;
export const PaymentUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
