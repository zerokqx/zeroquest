import { applyDecorators, SetMetadata } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { env } from 'node:process';

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
        enum:
          env.NODE_ENV === 'production' && !env.SWAGGER_ENABLED
            ? ['web', 'telegram']
            : ['web', 'telegram', 'swagger'],
      },
    }),
  );
}
