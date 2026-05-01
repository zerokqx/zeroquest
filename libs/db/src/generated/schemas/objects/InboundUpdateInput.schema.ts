import * as z from 'zod';
import type { Prisma } from '../../client';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PlanUpdateManyWithoutInboundNestedInputObjectSchema as PlanUpdateManyWithoutInboundNestedInputObjectSchema } from './PlanUpdateManyWithoutInboundNestedInput.schema'

const makeSchema = () => z.object({
  enable: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inboundId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  plans: z.lazy(() => PlanUpdateManyWithoutInboundNestedInputObjectSchema).optional()
}).strict();
export const InboundUpdateInputObjectSchema: z.ZodType<Prisma.InboundUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundUpdateInput>;
export const InboundUpdateInputObjectZodSchema = makeSchema();
