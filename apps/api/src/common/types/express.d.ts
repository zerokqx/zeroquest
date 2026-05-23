import {  User as UserPrisma } from '@zeroquest/db';
import { AuthServiceTypes } from '@zeroquest/types';

declare global {
  namespace Express {
    interface User extends UserPrisma {
      jwtPayload?: AuthServiceTypes.JwtPayloadSchemaType
    }
    interface Request {
      clientType?: string,
      user?: User;
    }
  }
}

export {};
