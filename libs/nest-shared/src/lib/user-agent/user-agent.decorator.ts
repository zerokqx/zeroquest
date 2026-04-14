import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

export function ApiUserAgent() {
  return applyDecorators(
    ApiHeader({
      name: 'user-agent',
      required: true,
      description: 'User-Agent клиента',
      schema: {
        type: 'string',
        example: 'Mozilla/5.0',
      },
    }),
  );
}
