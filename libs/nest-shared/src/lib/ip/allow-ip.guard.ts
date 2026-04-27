import { Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AllowApiGuard } from './allow-api.guard';

@Injectable()
export class AllowIpGuard extends AllowApiGuard {
  constructor(reflector: Reflector, configService: ConfigService) {
    super(reflector, configService);
  }
}
