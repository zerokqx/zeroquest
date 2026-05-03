import { UserRole } from '@zeroquest/db';
import { AuthServiceTypes } from '@zeroquest/types';
import z, { ZodType } from 'zod';

export const JwtPayloadSchema = z.object({
  sub: z.string(),
  sid: z.string(),
  clientType: z.string(),
  role: z.enum(UserRole),
  type: z.enum(['access', 'refresh']),
  jti: z.string(),
  login: z.string(),
}) satisfies ZodType<AuthServiceTypes.JwtPayload>;

export type JwtPayloadSchemaType = z.infer<typeof JwtPayloadSchema>;
