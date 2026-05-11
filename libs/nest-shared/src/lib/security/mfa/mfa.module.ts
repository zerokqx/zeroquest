import { DynamicModule, Global, Module, Type } from '@nestjs/common';
import { MfaStateStoreService } from './mfa-state-store.service';
import { DiscoveryModule } from '@nestjs/core';
import { MfaRegistry } from './mfa.registry';

interface MfaModuleOptions {
  isGlobal?: boolean;
  methods?: Array<Type<unknown> | DynamicModule>;
}

@Global()
@Module({})
export class MfaModule {
  static forRoot({
    methods = [],
    isGlobal = false,
  }: MfaModuleOptions): DynamicModule {
    return {
      global: isGlobal,
      module: MfaModule,
      imports: [DiscoveryModule, ...methods],
      exports: [MfaRegistry, MfaStateStoreService],
      providers: [MfaRegistry, MfaStateStoreService],
    };
  }
}
