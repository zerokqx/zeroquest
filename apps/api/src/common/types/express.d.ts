import { AuthServiceTypes } from "@zeroquest/types";

declare global {
  namespace Express {
    interface User extends AuthServiceTypes.JwtPayloadSchemaType {}
    interface Request {
      clientType?:string
      user?: User;
    }
  }
}

export {};
