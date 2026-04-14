import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

import { AllowIpGuard } from './allow-ip.guard';

export const ALLOW_IP_KEY = 'allow_ip';

export function AllowIp(ips: string[]) {
  return applyDecorators(
    SetMetadata(ALLOW_IP_KEY, ips),
    UseGuards(AllowIpGuard),
  );
}
