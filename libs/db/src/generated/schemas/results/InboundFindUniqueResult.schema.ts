import * as z from 'zod';
export const InboundFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  enable: z.boolean(),
  name: z.string(),
  inboundId: z.number().int(),
  plans: z.array(z.unknown())
}));