import { applyDecorators, UseInterceptors } from '@nestjs/common';

import { LogAccessToRouteInterceptor } from './log-access-to-route.interceptor';

export function LogAccessToRoute() {
  return applyDecorators(UseInterceptors(LogAccessToRouteInterceptor));
}
