import { applyDecorators } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiOperation,
  type ApiOperationOptions,
} from '@nestjs/swagger';
import type { AuthServiceTypes } from '@zeroquest/types';

type ApiRoleOnlyOptions = Pick<ApiOperationOptions, 'summary' | 'description'>;

export function ApiRoleOnly(
  role: AuthServiceTypes.UserRole,
  options?: ApiRoleOnlyOptions,
) {
  const roleLabel = `ТОЛЬКО ДЛЯ ${role}`;
  const description = options?.description
    ? `${roleLabel}\n\n${options.description}`
    : roleLabel;

  return applyDecorators(
    ApiOperation({
      summary: options?.summary,
      description,
    }),
    ApiForbiddenResponse({
      description: `Доступ разрешён только для роли ${role}`,
    }),
  );
}
