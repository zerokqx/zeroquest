import { SetMetadata } from '@nestjs/common';
import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

export const CLIENT_TYPE_KEY = 'client_type';
export const ClientType = (...args: string[]) =>
  SetMetadata(CLIENT_TYPE_KEY, args);

export function ApiClientType() {
  return applyDecorators(
    ApiHeader({
      name: 'x-client-type',
      required: true,
      description: 'Тип клиента',
      schema: {
        type: 'string',
        enum: ['web', 'telegram'],
      },
    }),
  );
}
