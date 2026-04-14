import { applyDecorators, SetMetadata } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

export const CLIENT_TYPE_KEY = 'client_type';

export const ClientType = (...clientTypes: string[]) =>
  SetMetadata(CLIENT_TYPE_KEY, clientTypes);

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
