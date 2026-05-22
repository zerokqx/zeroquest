import z, { type ZodType } from 'zod';

type RefreshSession = {
  sub: string;
  clientType: string;
  jti: string;
};

export const SessionSchema = z.object({
  sub: z.string(),
  clientType: z.string(),
  jti: z.string(),
}) satisfies ZodType<RefreshSession>;

