import { EnvironmentVariables } from '@/config/configuration';
import { ConfigService } from '@nestjs/config';
import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto';
import { EncryptData } from './types/encrypt.types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TotpEncrypt {
  private readonly algoritm = 'aes-256-gcm';
  private readonly encryptionKey!: string;

  constructor(private readonly config: ConfigService<EnvironmentVariables>) {
    this.encryptionKey = this.config.getOrThrow('totp', {
      infer: true,
    }).encryptionKey;
  }

  encrypt(secret: string): EncryptData {
    const key = Buffer.from(this.encryptionKey, 'base64');

    if (key.length !== 32) {
      throw new Error('TOTP_ENCRYPTION_KEY must be 32 bytes base64');
    }
    const iv = randomBytes(12);
    const cipher = createCipheriv(this.algoritm, key, iv);

    const ciphertext = Buffer.concat([
      cipher.update(secret, 'utf-8'),
      cipher.final(),
    ]);
    const authTag = cipher.getAuthTag();
    return {
      ciphertext: ciphertext.toString('base64'),
      iv: iv.toString('base64'),
      authTag: authTag.toString('base64'),
    };
  }

  decrypt(encrypted: EncryptData) {
    const key = Buffer.from(this.encryptionKey, 'base64');

    if (key.length !== 32) {
      throw new Error('TOTP_ENCRYPTION_KEY must be 32 bytes base64');
    }
    const decipher = createDecipheriv(
      this.algoritm,
      key,
      Buffer.from(encrypted.iv, 'base64'),
    );
    decipher.setAuthTag(Buffer.from(encrypted.authTag, 'base64'));

    const plaintext = Buffer.concat([
      decipher.update(Buffer.from(encrypted.ciphertext, 'base64')),
      decipher.final(),
    ]);
    return plaintext.toString();
  }
}
