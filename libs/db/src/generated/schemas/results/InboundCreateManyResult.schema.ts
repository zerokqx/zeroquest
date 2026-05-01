import * as z from 'zod';
export const InboundCreateManyResultSchema = z.object({
  count: z.number()
});