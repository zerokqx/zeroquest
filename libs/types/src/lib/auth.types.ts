export type UserRole = 'USER' | 'ADMIN';

import z from 'zod';

export interface AuthCookie {
  zeroquestAccess: string;
  zeroquestRefresh: string;
}

export const JwtPayloadSchema = z.object({
  sub: z.cuid2(),
  sid: z.nanoid(),
  type: z.enum(['access', 'refresh']),
  jti: z.string(),
});

export type JwtPayloadSchemaType = z.infer<typeof JwtPayloadSchema>;
