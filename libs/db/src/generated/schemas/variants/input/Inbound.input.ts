import * as z from 'zod';
// prettier-ignore
export const InboundInputSchema = z.object({
    id: z.number().int(),
    enable: z.boolean(),
    name: z.string(),
    inboundId: z.number().int(),
    plans: z.array(z.unknown())
}).strict();

export type InboundInputType = z.infer<typeof InboundInputSchema>;
