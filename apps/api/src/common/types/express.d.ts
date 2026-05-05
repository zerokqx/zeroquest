import { JwtPayloadSchemaType } from '@/domains/access/token/dto/schemas/payload.schema';

declare global {
  namespace Express {
    interface User extends JwtPayloadSchemaType {}
    interface Request {
      user?: User;
    }
  }
}

export {};
