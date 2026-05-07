import { EncryptData } from './encrypt.types';

export interface TotpTokenData {
  secret: string;
  token: string;
  uri: string,
}

export interface ChallengeObject extends EncryptData {
  attempts: number;
}

export type ValidateObject =
  | { valid: true; encrypted: EncryptData }
  | { valid: false };
