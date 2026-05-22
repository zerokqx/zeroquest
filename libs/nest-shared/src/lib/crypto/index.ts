import { Injectable } from '@nestjs/common';
import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  CipherGCMTypes,
  CipherCCMTypes,
} from 'node:crypto';

export interface EncryptData {
  ciphertext: string;
  iv: string;
  authTag: string;
}

export interface EncryptConfig {
  algorithm: CipherGCMTypes | CipherCCMTypes;
  key: string;
  ivLength?: number; // default для GCM 12, для CCM может быть 7-13
}

export interface DecryptInput {
  ciphertext: string;
  iv: string;
  authTag: string;
}

@Injectable()
export class CryptoService {
  private readonly algorithm: CipherGCMTypes | CipherCCMTypes;
  private readonly key: Buffer;
  private readonly ivLength: number;
  private readonly isCcm: boolean;

  constructor(config: EncryptConfig) {
    this.algorithm = config.algorithm;
    this.isCcm = this.algorithm.includes('ccm');
    this.key = Buffer.from(config.key, 'base64');

    if (![16, 24, 32].includes(this.key.length)) {
      throw new Error('Encryption key must be 16, 24 or 32 bytes in base64');
    }

    // Default IV length для GCM 12 байт, CCM может быть 7-13
    this.ivLength = config.ivLength ?? 12;
  }

  encrypt(plaintext: string): EncryptData {
    const iv = randomBytes(this.ivLength);
    const cipher = this.isCcm
      ? createCipheriv(this.algorithm as CipherCCMTypes, this.key, iv, {
          authTagLength: 16,
        })
      : createCipheriv(this.algorithm as CipherGCMTypes, this.key, iv);

    const ciphertext = Buffer.concat([
      cipher.update(plaintext, 'utf8'),
      cipher.final(),
    ]);
    const authTag = cipher.getAuthTag();

    return {
      ciphertext: ciphertext.toString('base64'),
      iv: iv.toString('base64'),
      authTag: authTag.toString('base64'),
    };
  }

  decrypt({ ciphertext, iv, authTag }: DecryptInput): string {
    const decodedIv = Buffer.from(iv, 'base64');
    const decipher = this.isCcm
      ? createDecipheriv(
          this.algorithm as CipherCCMTypes,
          this.key,
          decodedIv,
          { authTagLength: 16 },
        )
      : createDecipheriv(this.algorithm as CipherGCMTypes, this.key, decodedIv);
    decipher.setAuthTag(Buffer.from(authTag, 'base64'));

    const plaintext = Buffer.concat([
      decipher.update(Buffer.from(ciphertext, 'base64')),
      decipher.final(),
    ]);

    return plaintext.toString('utf8');
  }
}
