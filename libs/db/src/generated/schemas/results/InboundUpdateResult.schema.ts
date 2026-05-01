import * as z from 'zod';
export const InboundUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  enable: z.boolean(),
  name: z.string(),
  inboundId: z.number().int(),
  plans: z.array(z.unknown())
}));