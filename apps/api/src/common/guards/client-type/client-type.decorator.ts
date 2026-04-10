import { SetMetadata } from '@nestjs/common';

export const CLIENT_TYPE_KEY = 'client_type';
export const ClientType = (...args: string[]) =>
  SetMetadata(CLIENT_TYPE_KEY, args);
