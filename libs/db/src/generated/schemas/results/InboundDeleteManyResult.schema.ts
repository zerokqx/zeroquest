import * as z from 'zod';
export const InboundDeleteManyResultSchema = z.object({
  count: z.number()
});