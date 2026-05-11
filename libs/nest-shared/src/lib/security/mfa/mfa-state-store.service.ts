import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { nanoid } from 'nanoid';
import { MfaName } from './mfa.types';


@Injectable()
export class MfaStateStoreService<T extends object> {
  private readonly maxAttempts = 5;
  private readonly ttlSeconds = 300;

  constructor(private readonly redis: Redis) {}

  private key(
    userId: string,
    id: string,
    type: MfaName,
    purpose: Purpose = 'challenge',
  ) {
    return `mfa:${userId}:${purpose}:${type}:${id}`;
  }

  id() {
    return nanoid();
  }

  private challengeNotDefined() {
    return new Error('Challnge not found');
  }
  async getOrThrow(
    userId: string,
    id: string,
    type: MfaName,
    purpose: Purpose = 'challenge',
  ): Promise<MfaState<T>> {
    const data = await this.get(userId, id, type, purpose);
    if (!data) throw this.challengeNotDefined();
    return data;
  }
  /** Получает объект, если он есть, парсит JSON */
  async get(
    userId: string,
    id: string,
    type: MfaName,
    purpose: Purpose = 'challenge',
  ): Promise<MfaState<T> | undefined> {
    const key = this.key(userId, id, type, purpose);
    const raw = await this.redis.get(key);
    if (!raw) return undefined;
    try {
      return JSON.parse(raw) as MfaState<T>;
    } catch {
      return undefined;
    }
  }

  /** Устанавливает JSON со значением и TTL */
  async set(
    userId: string,
    data: T,
    type: MfaName,
    purpose: Purpose = 'challenge',
  ): Promise<string> {
    const id = this.id();
    const key = this.key(userId, id, type, purpose);

    const value = JSON.stringify({
      ...data,
      attempts: 0,
      purpose,
      type,
    } satisfies MfaState<T>);

    await this.redis.set(key, value, 'EX', this.ttlSeconds); // EX = TTL в секундах:contentReference[oaicite:0]{index=0}

    return id;
  }

  /** Удаляет ключ, возвращает true/false */
  async del(
    userId: string,
    id: string,
    type: MfaName,
    purpose: Purpose = 'challenge',
  ): Promise<boolean> {
    const key = this.key(userId, id, type, purpose);
    const count = await this.redis.del(key);
    return count > 0; // количество удалённых ключей >0 => true
  }

  /** Есть ли запись */
  async exists(
    userId: string,
    id: string,
    type: MfaName,
    purpose: Purpose = 'challenge',
  ): Promise<boolean> {
    const key = this.key(userId, id, type, purpose);
    const exists = await this.redis.exists(key);
    return exists === 1;
  }

  /** Увеличивает attempts, возвращает обновлённый объект */
  async incrementAttempts(
    userId: string,
    id: string,

    type: MfaName,
    purpose: Purpose = 'challenge',
  ): Promise<MfaState<T>> {
    const challenge = await this.getOrThrow(userId, id, type, purpose);
    challenge.attempts++;

    // перезаписываем значение, сохраняя TTL
    // Redis TTL не сбрасывается на обычные операции,
    // но при set он заменится новым TTL
    await this.redis.set(
      this.key(userId, id, type, purpose),
      JSON.stringify(challenge),
      'EX',
      this.ttlSeconds,
    );

    if (this.maxAttempts && challenge.attempts > this.maxAttempts) {
      await this.del(userId, id, type, purpose);
    }

    return challenge;
  }

  async update(
    userId: string,
    id: string,
    type: MfaName,
    purpose: Purpose = 'challenge',
    partial: Partial<MfaState<T>>,
  ) {
    const key = this.key(userId, id, type, purpose);
    const data = await this.getOrThrow(userId, id, type, purpose);
    const updated: MfaState<T> = {
      ...data,
      ...partial,
    };
    await this.redis.set(key, JSON.stringify(updated), 'KEEPTTL');
    return updated;
  }
}
