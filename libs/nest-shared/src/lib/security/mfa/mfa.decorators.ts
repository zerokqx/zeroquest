import { SetMetadata } from '@nestjs/common';
import { DiscoveryService } from '@nestjs/core';
import { type MfaSchemasType } from './mfa.types';
import {
  MFA_SCHEMAS,
  MFA_NAME,
  MFA_SETUP_FOR,
  MFA_SENDER_FOR,
  MFA_VALIDATOR,
  MFA_VALIDATOR_FOR,
} from './mfa-tokens';

/**
 * Флаг-декоратор для DiscoveryService: помечает класс как стратегию MFA
 * Используется для автоматического поиска через DiscoveryService
 */
export const MfaStrategy = DiscoveryService.createDecorator();

/**
 * Уникальное имя стратегии MFA
 * @param name уникальный идентификатор стратегии
 */
export const MfaName = (name: string) => SetMetadata(MFA_NAME, name);

/**
 * Схемы валидации input/output для стратегии
 * @param data объект с Zod-схемами для start/confirm
 */
export const MfaSchemas = (data: MfaSchemasType) =>
  SetMetadata(MFA_SCHEMAS, data);

/**
 * Флаг-декоратор для DiscoveryService: помечает класс как Setup для MFA
 * Используется для автоматического поиска через DiscoveryService
 */
export const MfaSetup = DiscoveryService.createDecorator();

/**
 * Указывает для какой стратегии предназначен Setup
 * @param forStrategy имя стратегии
 */
export const MfaSetupFor = (forStrategy: string) =>
  SetMetadata(MFA_SETUP_FOR, forStrategy);

/**
 * Флаг-декоратор для DiscoveryService: помечает класс как Sender для MFA
 * Используется для автоматического поиска через DiscoveryService
 */
export const MfaSender = DiscoveryService.createDecorator();

/**
 * Указывает для какой стратегии предназначен Sender
 * @param forStrategy имя стратегии
 */
export const MfaSenderFor = (forStrategy: string) =>
  SetMetadata(MFA_SENDER_FOR, forStrategy);

export const MfaValidator = DiscoveryService.createDecorator();

export const MfaValidatorFor = (forStrategy: string) =>
  SetMetadata(MFA_VALIDATOR_FOR, forStrategy);
