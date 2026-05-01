import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PlanUncheckedUpdateManyWithoutInboundNestedInputObjectSchema as PlanUncheckedUpdateManyWithoutInboundNestedInputObjectSchema } from './PlanUncheckedUpdateManyWithoutInboundNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  enable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inboundId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  plans: z.lazy(() => PlanUncheckedUpdateManyWithoutInboundNestedInputObjectSchema).optional()
}).strict();
export const InboundUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.InboundUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundUncheckedUpdateInput>;
export const InboundUncheckedUpdateInputObjectZodSchema = makeSchema();
