import { SetMetadata } from '@nestjs/common';
import type { AuthServiceTypes } from '@zeroquest/types';

export const ROLE_KEY = 'role';

export const Role = (...roles: AuthServiceTypes.UserRole[]) =>
  SetMetadata(ROLE_KEY, roles);
