import { AuthServiceTypes } from '@zeroquest/types';
import z from 'zod';

export const TokenCreateSchema = AuthServiceTypes.JwtPayloadSchema.omit({
  type: true,
  jti: true,
});

export type TokenCreateSchemaType = z.infer<typeof TokenCreateSchema>;
