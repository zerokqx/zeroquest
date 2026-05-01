import { Session } from '@zeroquest/db';
import z from 'zod';
export const SessionSchema = z.object<Auth>({
  sub: z.string(),
  clientType: z.string(),
  jti: z.string(),
});


