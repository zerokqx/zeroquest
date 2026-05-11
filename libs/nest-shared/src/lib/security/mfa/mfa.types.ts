import { ZodType } from 'zod';
import { MfaSender } from './mfa-sender.abstract';
import { MfaStrategy } from './mfa-strategy.interface';
import { MfaSetup } from './mfa-setup.abstract';
import { MfaValidator } from './mfa-validator.interface';

type Purpose = 'challenge' | 'setup';

export type MfaState<T = null> = {
  purpose: Purpose;
  type: string;
  attempts: number;
} & T;

export type MfaCode = {
  code: string;
  identifier: string;
};

// export type MfaLink = {
//   code: string;
//   identifier: string;
// };

export interface MfaSchemasType {
  input?: ZodType;
  output?: ZodType;
}

export interface MfaMethodsMap {
  sender?: MfaSender;
  strategy?: MfaStrategy;
  setup?: MfaSetup;
  validator?: MfaValidator;
}
