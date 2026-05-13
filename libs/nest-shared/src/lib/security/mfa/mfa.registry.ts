import { Injectable, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, Reflector } from '@nestjs/core';
import { MfaStrategy as MfaStrategyInterface } from './mfa-strategy.interface';
import { MfaSetup as MfaSetupInterface } from './mfa-setup.abstract';
import {
  MfaSenderDecorator,
  MfaSetupDecorator,
  MfaStrategyDecorator,
  MfaValidatorDecorator,
} from './mfa.decorators';
import { MfaValidator as MfaValidatorInterface } from './mfa-validator.interface';
import { MfaMethodsMap } from './mfa.types';
import {
  MFA_NAME,
  MFA_SENDER_FOR,
  MFA_SETUP_FOR,
  MFA_VALIDATOR_FOR,
} from './mfa-tokens';
import { MfaSender as MfaSenderInterface } from './mfa-sender.abstract';

@Injectable()
export class MfaRegistry implements OnModuleInit {
  private strategies = new Map<string, MfaStrategyInterface>();
  private setups = new Map<string, MfaSetupInterface>();
  private validators = new Map<string, MfaValidatorInterface>();
  private senders = new Map<string, MfaSenderInterface>();
  private methods = new Map<string, MfaMethodsMap>();

  constructor(
    private readonly discovery: DiscoveryService,
    private readonly reflector: Reflector,
  ) {}

  onModuleInit() {
    for (const p of this.discovery.getProviders()) {
      if (!p.instance) continue;
      if (!p.metatype) continue;
      const isStrategy = this.discovery.getMetadataByDecorator(MfaStrategyDecorator, p);
      const isSetup = this.discovery.getMetadataByDecorator(MfaSetupDecorator, p);
      const isSender = this.discovery.getMetadataByDecorator(MfaSenderDecorator, p);
      const isValidator = this.discovery.getMetadataByDecorator(
        MfaValidatorDecorator,
        p,
      );

      if (isStrategy) {
        const name = this.reflector.get<string | undefined>(
          MFA_NAME,
          p.metatype,
        );
        if (!name) throw this.error(`${p.name} not have name decorator`);

        this.strictMapSet(this.strategies, name, p.instance);
        const methods = this.getOrCreateMethod(name);
        methods.strategy = p.instance;
      }

      if (isSetup) {
        const setupFor = this.reflector.get<string | undefined>(
          MFA_SETUP_FOR,
          p.metatype,
        );
        if (!setupFor)
          throw this.error(
            `${p.name} setup cannot be used without specifying the MfaSetupFor decorator.`,
          );
        this.strictMapSet<string, MfaSetupInterface>(
          this.setups,
          setupFor,
          p.instance,
        );
        const methods = this.getOrCreateMethod(setupFor);
        methods.setup = p.instance;
      }
      if (isValidator) {
        const validatorFor = this.reflector.get<string | undefined>(
          MFA_VALIDATOR_FOR,
          p.metatype,
        );
        if (!validatorFor)
          throw this.error(
            `${p.name} validator cannot be used without specifying the MfaValidatorFor decorator.`,
          );
        this.strictMapSet<string, MfaValidatorInterface>(
          this.validators,
          validatorFor,
          p.instance,
        );
        const methods = this.getOrCreateMethod(validatorFor);
        methods.validator = p.instance;
      }

      if (isSender) {
        const senderFor = this.reflector.get<string | undefined>(
          MFA_SENDER_FOR,
          p.metatype,
        );
        if (!senderFor)
          throw this.error(
            `${p.name} sender cannot be used without specifying the MfaSenderFor decorator.`,
          );
        this.strictMapSet<string, MfaSenderInterface>(
          this.senders,
          senderFor,
          p.instance,
        );
        const methods = this.getOrCreateMethod(senderFor);
        methods.sender = p.instance;
      }
    }
    this.validateMethods();
  }
  private validateMethods(): void {
    for (const [name, method] of this.methods) {
      if (!method.strategy) {
        throw this.error(`MFA method "${name}" has no strategy.`);
      }
    }
  }
  error(content: string) {
    return new Error(`[MfaRegistry] ${content}`);
  }

  private strictMapSet<K, V>(map: Map<K, V>, key: K, value: V): void {
    if (map.has(key)) {
      throw this.error(`Duplicate key "${String(key)}" found in registry.`);
    }

    map.set(key, value);
  }
  private getOrCreateMethod(name: string): MfaMethodsMap {
    let methods = this.methods.get(name);
    if (!methods) {
      methods = {};
      this.methods.set(name, methods);
    }
    return methods;
  }
  resolveSetup(name: string) {
    const data = this.setups.get(name);
    if (!data) throw this.error(`Setup ${name} not found`);
    return data;
  }

  resolveStrategy(name: string) {
    const data = this.strategies.get(name);
    if (!data) throw this.error(`Strategy ${name} not found`);
    return data;
  }

  resolveSender(name: string) {
    const data = this.senders.get(name);
    if (!data) throw this.error(`Sender ${name} not found`);
    return data;
  }

  resolveValidator(name: string) {
    const data = this.validators.get(name);
    if (!data) throw this.error(`Validator ${name} not found`);
    return data;
  }

  resolveMethod(name: string): MfaMethodsMap {
    const data = this.methods.get(name);
    if (!data) throw this.error(`MFA method "${name}" not found`);
    return data;
  }
}
