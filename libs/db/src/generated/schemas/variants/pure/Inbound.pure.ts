import * as z from 'zod';
// prettier-ignore
export const InboundModelSchema = z.object({
    id: z.number().int(),
    enable: z.boolean(),
    name: z.string(),
    inboundId: z.number().int(),
    plans: z.array(z.unknown())
}).strict();

export type InboundPureType = z.infer<typeof InboundModelSchema>;
