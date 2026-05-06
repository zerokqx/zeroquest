import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import Redis from 'ioredis';

interface Session {
  sid: string;
  uid: string;
  accessJti: string;
  refreshJti: string;
  lastActivityAt: number;
  clientType: string;
}

type SessionCreate = Omit<Session, 'sid' | 'lastActivityAt'> &
  Partial<Pick<Session, 'sid' | 'lastActivityAt'>>;
type SessionUpdate = Partial<Omit<Session, 'uid' | 'sid' | 'clientType'>>;
type SessionDelete = Pick<Session, 'sid' | 'uid'>;

@Injectable()
export class SessionRedisService {
  constructor(private readonly redis: Redis) {}
  userSessionsKey(uid: Session['uid']) {
    return `user:${uid}:sessions`;
  }

  ttlSession() {
    return 86400 * 30;
  }

  sessionKey(sid: Session['sid']) {
    return `session:${sid}`;
  }

  async createSession(data: SessionCreate): Promise<Session> {
    const sid = data.sid ?? nanoid();
    const ttl = this.ttlSession();
    const lastActivityAt = Date.now();
    const sessionKey = this.sessionKey(sid);
    const userSessionsKey = this.userSessionsKey(data.uid);
    const value: Session = { sid, lastActivityAt, ...data };

    await this.redis
      .multi()
      .set(sessionKey, JSON.stringify(value), 'EX', ttl)
      .sadd(userSessionsKey, sid)
      .expire(userSessionsKey, ttl)
      .exec();
    return value;
  }

  async deleteSession({ sid, uid }: SessionDelete) {
    const userSessionsKey = this.userSessionsKey(uid);
    const sessionKey = this.sessionKey(sid);
    await this.redis.multi().del(sessionKey).srem(userSessionsKey, sid).exec();
  }

  async updateSession(
    sid: Session['sid'],
    data: SessionUpdate,
  ): Promise<Session> {
    const sessionKey = this.sessionKey(sid);
    const raw = await this.redis.get(sessionKey);
    if (!raw) throw new Error('Session not found');
    const session = JSON.parse(raw) as Session;

    const updated: Session = {
      ...session,
      ...data,
    };

    await this.redis.set(sessionKey, JSON.stringify(updated), 'KEEPTTL', 'XX');
    return updated;
  }

  async getSession(sid: Session['sid']): Promise<Session> {
    const sessionKey = this.sessionKey(sid);

    const raw = await this.redis.get(sessionKey);
    if (!raw) throw new Error('Session not found');
    return JSON.parse(raw) satisfies Session;
  }
}
